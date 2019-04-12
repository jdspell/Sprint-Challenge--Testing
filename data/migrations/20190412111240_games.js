
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', tbl => {
      tbl.increments();

    tbl
      .string('title', 256)
      .notNullable();

    tbl
      .string('genre', 256)
      .notNullable();
    
    tbl
      .integer('releaseYear', 256);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
