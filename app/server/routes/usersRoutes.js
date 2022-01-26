const express = require('express');
const usersController = require('../../controllers/UsersController');
const routes = express.Router();

routes.get('/:id', usersController.show);
routes.post('/', usersController.store);

module.exports = routes;
