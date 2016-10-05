
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments();
    table.text('username');
    table.text('password');
    table.text('firstname');
    table.text('lastname');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
