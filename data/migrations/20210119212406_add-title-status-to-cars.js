
exports.up = function(knex) {
  return knex.schema.table('cars', table=>{
    table.string('Status_of_Title');
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', table=>{
      table.dropColumn('Status_of_Title');
  })
};
