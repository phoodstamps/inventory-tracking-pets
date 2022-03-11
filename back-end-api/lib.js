//const { path } = require("./app");
var rfs = require('rotating-file-stream');
var path = require('path');

const inventoryTrackingLogStream = rfs.createStream('InventoryServer.log', {
    interval: '1d',
    path: path.join('/usr/src/app/logs')
});

module.exports = {
    inventoryTrackingLogStream
}