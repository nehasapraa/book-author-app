import Book from '../../../models/Book';
import Author from '../../../models/Author';

import elasticsearch from './elasticsearch.service';

class DbService {

  books() {
    return Promise.resolve(
     Book
     .query()
     .withGraphFetched('author')
     );
  }

  authors() {
    return Promise.resolve(
      Author
      .query()
      .withGraphFetched('books')
    );
  }

  async insert(book){
    let bookCreated;
    try {

      let author;
      const scrappy = await Author.transaction(async trx => {
        author = await Author
          .query(trx)
          .where('full_name','=', book.author_name)

        if(author.length > 0){
          author = author[0];
        } else {
          author = await Author
           .query(trx)
           .insert({'full_name':book.author_name})
        }

        await elasticsearch.create(book);
        delete book.author_name;
        book.author_id  = author.id;

        bookCreated = await author
          .$relatedQuery('books', trx)
          .insert(book);

        return bookCreated;
      });
    } catch (err) {
        console.log('Err', err);
    }
    return bookCreated
  }
}

export default new DbService();