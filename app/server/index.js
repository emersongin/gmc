const express = require('express');
const cors = require('cors');
const env = require('../../env');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors({allowedHeaders: '*'}));

server.use('/users', routes.users);







server.listen(env.SERVER_PORT, env.SERVER_HOST, () => {
    console.log(`rodando host: ${env.SERVER_HOST}, port: ${env.SERVER_PORT}`);
});

module.exports = server;
