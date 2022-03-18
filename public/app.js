const express = require('express');
const env = require('../env');
const db = require('../app/database');
const app = express();
const consign = require('consign');


consign({
        cwd: 'app',
        locale: 'pt-br'
    })
    .include('models/index')
    .then('components')
    .then('middlewares')
    .then('routers')
    .into(app);

app.db = db;

app.listen(env.SERVER_PORT, env.SERVER_HOST, () => {
    console.log(`rodando host: ${env.SERVER_HOST}, port: ${env.SERVER_PORT}`);
});