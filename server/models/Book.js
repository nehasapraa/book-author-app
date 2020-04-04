import Bookshelf from '../../db/bookshelf';
import Author from './Author';

class Book extends Bookshelf.Model{
  get tableName() {
    return 'books';
  };
  author() {
    return this.belongsTo('Author', 'author_id');
  };
};
export default Bookshelf.model('Book', Book);