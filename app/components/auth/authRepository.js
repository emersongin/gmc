
const bcrypt = require('bcryptjs');

const { QueryTypes } = require('../../models').Sequelize;
const sequelize = require('../../models').sequelize;
const User = require('../../models').User;

const { Op } = require('sequelize');

const findUsername = async (username, res) => {
    try {
        const user = await User.findOne({ where: { username } });

        return res.success({ validUsername: user === null });
    } catch (error) {
        return res.error(error, 500);
    }
}

const insertUser = async (user, res) => {
    try {

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);

        user.password = hash;

        const newUser = await User.create(user);

        return res.success(newUser.id, 201);
    } catch (error) {
        return res.error(error, 500);
    }
}

module.exports = {
    findUsername,
    insertUser
};