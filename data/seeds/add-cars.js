
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 24214,Mileage:4654, Make:"Ford", Model:"Mustang",Transmission_Type: "Automatic", Status_of_Title: "Clear"},
        {VIN: 46481,Mileage:51488, Make:"Honda", Model:"Acura",Transmission_Type: "Manual", Status_of_Title: "Clouded"},
        
      ]);
    });
};
