const express = require('express');
const cors = require('cors');
const response = require('./responseHandler');

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({allowedHeaders: '*'}));
    app.use(response);

};
