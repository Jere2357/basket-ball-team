const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    //Models;
    Destination = require('./teams-api/models/destinationModel'),
    bodyParser = require('body-parser');
//Environment Variables
require('dotenv').config();


// mongoose instance connection url connection
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require('./teams-api/routes/destination'); //importing route
routes(app); //register the route

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to Hikeathon API!'
    })
});

app.listen(port, () => {
    // For Local Testing
    // Use RoboMongo
    mongoose.connect('mongodb://localhost:27017/BasketballTeams', { useNewUrlParser: true }, (err) => {
        if(!err){
            console.log('MongoDB connection success!');
        }
    });

    // Heroku API
    // mongoose.connect(process.env.MONGODB_URI)

    mongoose.connection
        .once('open', () => {
            console.log(`Started on port 3000`)
            console.log(' Hikeathon API Now Running!')
        })
        .on('error', error => {
            console.warn('Warning', error)
        })
})