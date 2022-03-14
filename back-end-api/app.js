const express = require('express');
//const routes = require('./routes');
const lib = require('./lib.js')
const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
var mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
require('dotenv').config();

mongoose.connect(process.env.MONGOCONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR"));
db.once("open", async() => {
    //we're connected
    lib.inventoryTrackingLogStream.write(' Connected to DB\n');
})

var app = express();

app.use(cors());

app.use(
    session({
        name:"inventoryTracking.sid",
        store: MongoStore.create({ mongoUrl: process.env.MONGOCONN}),
        secret: process.env.SECRET_KEY,
        cookie: { maxAge: (1000 * 60 * 60) * 12},
        saveUninitialized: false,
        resave: false
    })
);

//app.use(flash());

// Setup morgan logger
app.use(morgan('combined', {stream: lib.inventoryTrackingLogStream}));
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
//app.set('view engine', 'ejs');
// Extended is set to true by default but it must be explicitly called in the current version of node

app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Connected!'});
})

//app.use('/', routes);

module.exports = app;