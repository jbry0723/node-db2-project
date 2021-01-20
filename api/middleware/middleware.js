const Cars=require('../cars/cars-model')

function validateId(req,res,next){
    Cars.getById(req.params.id)
    .then(car=>{
        if(car){next()}
        else{res.status(404).json({Message:`Car with the id of ${req.params.id} not found`})}
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({Message:'There was an error validating your request'})
    })

}

function validateCarBody(req,res,next){
    if(Object.keys(req.body).length===0){
        res.status(400).json({message:"Missing data."})
      }
      else if(!req.body.VIN){
        res.status(400).json({message:"Missing VIN."})
    }
    else if(!req.body.Make){
        res.status(400).json({message:"Missing make of car."})
    }
    else if(!req.body.Model){
        res.status(400).json({message:"Missing model of car."})
    }
    else if(!req.body.Mileage){
        res.status(400).json({message:"Missing car's mileage."})
    }
    else{next()}
}

module.exports={validateCarBody,validateId}