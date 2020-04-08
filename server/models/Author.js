const { Model } = require('objection');
import db from '@db/db'

Model.knex(db)

class Author extends Model {
  static get tableName() {
    return 'author';
  }

  static get relationMappings() {
    const Book = require('./Book');
    return {
      books: {
        relation: Model.HasManyRelation,
        modelClass: Book,
        join: {
          from: 'author.id',
          to:  'books.author_id'
        }
      }
    }
  }
}
module.exports = Author;