const db=require('../../data/db-config')

module.exports={
    get,
    getById,
    create,

}

function get(){
    return db()
    .from('cars')
    .select('id','VIN','Make','Model','Mileage','Transmission_Type','Status_of_Title')
}

function getById(id){
    return db('cars').where('id',id).first()
}

function create(car){
    return db('cars').insert(car)
    .then(([id])=>{
        return db('cars').where('id', id).first()
    })
}