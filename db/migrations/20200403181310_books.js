exports.up = function(knex) {
  return knex.schema.createTable('books', function(t) {
      t.increments('id').unsigned().primary();
      t.text('title').notNull();
      t.integer('author_id').unsigned().notNull();
      t.integer('popularity').nullable();
      t.text('book_description').nullable();
      t.text('img').nullable();
      t.timestamp('created_at').defaultTo(knex.fn.now());
      });

      t.foreign('author_id').references('id').inTable('author');
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
