const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let animalSchema = new Schema({
  vendor: {
    type: String
  },
  invoice: {
    type: Number
  },
  animalType: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  sex: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true,
    get: getPrice,
    set: setPrice
  },
  location: {
    type: String,
    required: true
  },
  sellingPrice: {
    type: Number,
    get: getPrice,
    set: setPrice
  },
  customerName: {
    type: String
  },
  sellDate: {
    type: Date
  },
  deathDate: {
    type: Date
  },
}, {
  collection: 'animals'
})

function getPrice(num) {
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

module.exports = mongoose.model('Animal', animalSchema)