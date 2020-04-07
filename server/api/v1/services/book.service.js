import db from './db.service';

class BookService {
  all() {
    return db.books();
  }
  create(book) {
    return  db.insert(book);
  }
  search(term) {
    return  db.search(term);
  }
}

export default new BookService();