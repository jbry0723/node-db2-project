const express = require('express');
const Cars=require('./cars-model')

const {validateCarBody,validateId}=require('../middleware/middleware.js')

const router=express.Router()


router.get('/', (req, res, next) => {
    Cars.get('cars')
      .then(cars => {
        res.json(cars);
      })
      .catch(next)
  });

router.get('/:id',validateId, (req,res,next)=>{
    Cars.getById(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    
    })

    router.post('/', validateCarBody, (req,res,next)=>{
        Cars.create(req.body)
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                next(err)
            })
    
    
    })
  



router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
  })
module.exports = router