const express = require('express');
const eventsController = require('./eventsController');
const routes = express.Router();

// routes.get('/', eventsController);

module.exports = app => {
    app.use('/events', routes);
    
};
