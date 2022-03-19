const express = require('express');
const authController = require('./authController');
const routes = express.Router();

routes.get('/isusername', authController.username);

module.exports = app => {
    app.use('/auth', routes);
    
};
