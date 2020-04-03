exports.up = function(knex) {
return knex.schema.createTable('author', (t) => {
    t.increments('id').unsigned().primary();
    t.text('full_name').notNull();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    });

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('author');
};
