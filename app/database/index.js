const { Sequelize } = require('sequelize');
const dbConfig = require('./dbconfig');

const User = require('../models/user');

const sequelize = new Sequelize(dbConfig.str());

User.init(sequelize);

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');

//     } catch (error) {
//         console.error('Unable to connect to the database:', error);

//     }
// })();

module.exports = sequelize;
