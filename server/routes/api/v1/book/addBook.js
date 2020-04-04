import Book from '../../../../models/Book';
import client from '../../../../../elasticsearch/connection';
import Bookshelf from '../../../../../db/bookshelf';

class addBook {
  static addBooks(req, res, next) {
    let book = {
          title : req.body.title,
          author_id : req.body.author_id,
          popularity : req.body.popularity || null,
          book_description : req.body.book_description || null,
          img : req.body.img || null
     };
    Bookshelf.transaction(function (transaction) {
      Book
        .forge()
        .save(book, {transacting: transaction})
        .then((created)=>{
          res.json(created);
        })
        client
        .index({
          index: process.env.ELASTICSEARCH_INDEX_ENV,
          type: 'search term',
          body: {
            'title': req.body.title,
            'book_description': req.body.book_description
          }
        })
        .then(transaction.commit)
        .catch(transaction.rollback);
    });
  }
}
export default addBook;