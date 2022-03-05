const express = require('express');
const authController = require('../../controllers/AuthController');
const routes = express.Router();

routes.get('/isusername', authController.usernameIsExist);

module.exports = routes;
