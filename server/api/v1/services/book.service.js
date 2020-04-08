import db from './db.service';
import searchService from './elasticsearch.service';

class BookService {
  all() {
    return db.books();
  }
  create(book) {
    return db.insert(book);
  }
  search(term) {
    return searchService.search(term);
  }
}

export default new BookService();
