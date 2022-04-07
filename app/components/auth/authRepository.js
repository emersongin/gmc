const { QueryTypes } = require('../../models').Sequelize;
const sequelize = require('../../models').sequelize;
const User = require('../../models').User;

const { Op } = require('sequelize');

const findUsername = async (username, res) => {
    try {
        const user = await User.findOne({ where: { username } });

        return res.success({ validUsername: user === null });
    } catch (error) {
        return res.error({ error: "SQL error!"}, 500);
    }
}

module.exports = {
    findUsername
};