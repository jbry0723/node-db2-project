
exports.up = function(knex) {
  return knex.schema.createTable('cars',table =>{
      table.increments()
      table.integer('VIN').notNullable().unique()
      table.integer('Mileage').notNullable()
      table.string('Make').notNullable()
      table.string('Model').notNullable()
      table.string('Transmission_Type')
      

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};

