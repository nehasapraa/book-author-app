import Book from '../../../../models/Book';

class getBooks {
  static getAllBooks(req, res) {
  Book
      .fetchAll({withRelated: ['author']})
      .then((books)=>{
        res.json(books);
      }).catch(err => next(err));
  }
  static getOneBook(req, res) {
   //elastic search
  }
}
export default getBooks;