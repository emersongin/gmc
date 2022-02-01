
const { QueryTypes } = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const User = require('../models').User;

const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

const login = async (req, res) => {

};

const validateToken = async (req, res) => {

};

const usernameIsExist = async (req, res) => {
    const { username } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const reject = {
            usernameStatus: false,
            errors: errors.array(), 
        };

        return res.status(400).json(res.error(reject));
    }

    try {

        const sql = `
            SELECT
                COUNT(u.username) = 0 as username
            FROM
                users u
            WHERE
                u.username = $username
        `;

        const [ result ] = await sequelize.query(sql,
            {
                bind: { username }, 
                type: QueryTypes.SELECT
            }
        );

        return res.json(res.success({ usernameValid: result.username }));
    } catch (error) {
        res.json(res.error({error}));

    }

}

const createAccont = async (req, res) => {
    // const 


    // display_name
    // name
    // email
    // phone_number
    // password

};

module.exports = { 
    login, 
    validateToken, 
    usernameIsExist, 
    createAccont 
};
