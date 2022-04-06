const { QueryTypes } = require('../../models').Sequelize;
const sequelize = require('../../models').sequelize;
const User = require('../../models').User;

const { Op } = require('sequelize');

const findUsername = async (username, res) => {
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

        return res.success({ usernameValid: result.username });
    } catch (error) {
        return res.error({ error: "SQL error!"}, 500);
    }
}

module.exports = {
    findUsername
};