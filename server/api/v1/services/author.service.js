import db from './db.service';

class AuthorService {
  all() {
   return db.authors();
  }
}

export default new AuthorService();