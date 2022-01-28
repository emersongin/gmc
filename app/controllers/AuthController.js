
const User = require('../models/User');
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
        return res.status(400).json({ errors: errors.array() });
    }

    return res.json(username);

    const options = {
        where: { 
            [Op.or]: [{name: username}, {phone_number: username}, {email: username}]
        }
    };

    try {
        const user = await User.findOne(options);
        const result = {
            "usernameIsExist": !(user === null)
        };

        return res.json(res.success(result));
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
