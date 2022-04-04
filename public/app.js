require('dotenv').config();

const db = require('../app/config/database');
const express = require('express');
const consign = require('consign');
const app = express();

consign({
        cwd: 'app',
        locale: 'pt-br'
    })
    .include('models/index.js')
    .then('middlewares/index.js')
    .then('components')
    .into(app);

app.db = db;

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`rodando host: ${process.env.SERVER_HOST}, port: ${process.env.SERVER_PORT}`);
});
