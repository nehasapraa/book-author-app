const { Model }  = require('objection')
import db from '@db/db'
import Author from './Author'

Model.knex(db)

class Book extends Model{
  static get tableName() {
    return 'books';
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'books.author_id',
          to: 'author.id'
        }
      }
    }
  }
}
module.exports = Book;