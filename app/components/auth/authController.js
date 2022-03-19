
const { QueryTypes } = require('../../models').Sequelize;
const sequelize = require('../../models').sequelize;
const User = require('../../models').User;

const { Op } = require('sequelize');


const username = async (req, res) => {
    const { username } = req.body;

    try {

        const sql = `
            SELECT
                COUNT(u.username) > 0 as username
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

const login = async (req, res) => {
};

const validateToken = async (req, res) => {
};

module.exports = { 
    username, 
    createAccont,
    login, 
    validateToken
};
