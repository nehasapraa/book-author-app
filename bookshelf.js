var knex = require('knex')(require('./knexfile')[process.env.NODE_ENV])

var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

export default bookshelf;