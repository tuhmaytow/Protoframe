
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('images', function(table){
    table.increments();


  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
