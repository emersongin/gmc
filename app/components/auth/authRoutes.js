const express = require('express');
const authController = require('./authController');
const routes = express.Router();

routes.get('/username/:username', authController.username);
routes.post('/createaccont', authController.createAccont);

module.exports = app => {
    app.use('/auth', routes);
    
};
