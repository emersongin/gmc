const express = require('express');
const cors = require('cors');

const server = express();

const host = '10.0.0.109';
const port = '3000';

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors({allowedHeaders: '*'}));

require('../app/database');

const usersController = require('../app/controllers/UsersController');

server.post('/users', usersController.store);

server.get('/api', async function(req, res, next) {
    res.json({"msg": 'Close connection...'});

});

server.listen(port, host, () => {
    console.log(`rodando host: ${host}, port: ${port}`);
});
