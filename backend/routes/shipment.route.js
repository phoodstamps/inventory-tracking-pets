const express = require('express');
const shipmentRoute = express.Router();
// model
let ShipmentModel = require('../models/Shipment');
shipmentRoute.route('/create-shipment').post((req, res, next) => {
    ShipmentModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
shipmentRoute.route('/').get((req, res, next) => {
    ShipmentModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 shipmentRoute.route('/edit-shipment/:id').get((req, res, next) => {
    ShipmentModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
shipmentRoute.route('/update-shipment/:id').put((req, res, next) => {
    ShipmentModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Shipment successfully updated!')
    }
  })
})
// Delete
shipmentRoute.route('/delete-shipment/:id').delete((req, res, next) => {
    ShipmentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = shipmentRoute;