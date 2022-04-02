const express = require('express');
const lib = require('../lib.js')
const shipmentRoute = express.Router();

// model
let ShipmentModel = require('../models/Shipment');

// Creates shipment and stores in Shipments Collections in Mongo
shipmentRoute.route('/create-shipment').post((req, res, next) => {
  ShipmentModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data);
    lib.inventoryTrackingLogStream.write('Shipment successfully created!');
  }
})
});

// Gets all shipments from Shipments Collections in Mongo
shipmentRoute.route('/').get((req, res, next) => {
    ShipmentModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

// Updates a shipment with shipment id in param
shipmentRoute.route('/update-shipment/:id').put((req, res, next) => {
    ShipmentModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      lib.inventoryTrackingLogStream.write('Shipment successfully updated!')
    }
  })
})

// Deletes shipment with shipment id in param
shipmentRoute.route('/delete-shipment/:id').delete((req, res, next) => {
    ShipmentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
      lib.inventoryTrackingLogStream.write('Shipment successfully deleted!')
    }
  })
})
module.exports = shipmentRoute;