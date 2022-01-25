const express = require('express');
const cors = require('cors');

const { Client } = require('pg');
const client = new Client({
    user:     'postgres',
    host:     'localhost',
    database: 'guia',
    password: '1234',
    port:     5433
});

const server = express();

const host = '10.0.0.109';
const port = '3000';

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.get('/api', async function(req, res, next) {
    await client.connect();
    const response = await client.query('SELECT * FROM events');
    await client.end();

    res.json({"msg": response.rows[0]});
});

server.listen(port, host, () => {
    console.log(`rodando host: ${host}, port: ${port}`);
});
