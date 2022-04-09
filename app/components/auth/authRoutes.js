const express = require('express');
const auth = require('../../middlewares/auth');
const authController = require('./authController');
const routes = express.Router();

routes.get('/username/:username', authController.username);
routes.post('/createaccont', authController.createAccont);
routes.post('/login', authController.validateLogin);
routes.post('/', auth);

module.exports = app => {
    app.use('/auth', routes);
    
};
