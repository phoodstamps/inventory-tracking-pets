const express = require('express');
const lib = require('../lib.js')
const animalRoute = express.Router();

// model
let AnimalModel = require('../models/Animal');

// Creates shipment and stores in Shipments Collections in Mongo
animalRoute.route('/create-animal').post((req, res, next) => {
    AnimalModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
      lib.inventoryTrackingLogStream.write('Animal successfully created!');
    }
  })
  });
  
  // Gets all shipments from Shipments Collections in Mongo
  animalRoute.route('/').get((req, res, next) => {
    AnimalModel.find((error, data) => {
       if (error) {
         return next(error)
       } else {
         res.json(data)
       }
     })
   })
  
  // Updates a shipment with shipment id in param
  animalRoute.route('/update-animal/:id').put((req, res, next) => {
    AnimalModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        lib.inventoryTrackingLogStream.write('Animal successfully updated!')
      }
    })
  })
  
  // Deletes shipment with shipment id in param
  animalRoute.route('/delete-animal/:id').delete((req, res, next) => {
    AnimalModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
        lib.inventoryTrackingLogStream.write('Animal successfully deleted!')
      }
    })
  })

module.exports = animalRoute;