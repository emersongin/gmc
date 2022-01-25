const express = require('express');
const cors = require('cors');
const server = express();

const host = '10.0.0.109';
const port = '3000';

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.get('/api', function(req, res, next) {
    res.json({"msg": "teste"});
});

server.listen(port, host, () => {
    console.log(`rodando host: ${host}, port: ${port}`);
});
