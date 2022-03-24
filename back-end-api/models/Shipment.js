const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let shipmentSchema = new Schema({
  vendor: {
    type: String
  },
  invoice: {
    type: Number
  },
  shipDate: {
    type: Date
  },
}, {
  collection: 'shipments'
})
module.exports = mongoose.model('Shipment', shipmentSchema)