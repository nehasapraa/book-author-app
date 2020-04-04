import Bookshelf from '../../db/bookshelf';
import Book from './Book';

class Author extends Bookshelf.Model{
  get tableName() {
    return 'author';
  };
  books() {
    return this.hasMany('Book', 'author_id');
  };
};
export default Bookshelf.model('Author', Author);