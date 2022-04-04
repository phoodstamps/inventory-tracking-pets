const routes = require('express').Router();
const animals = require('./animal.route');
const shipment = require('./shipment.route');
//var path = require('path');
const bodyParser = require('express');

routes.use(bodyParser.urlencoded({extended: true}));
routes.use(bodyParser.json());

routes.use('/shipments',shipment);
routes.use('/animals',animals);


module.exports = routes;