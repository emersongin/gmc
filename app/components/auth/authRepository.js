
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const validateLogin = async (login, res) => {
    try {
        const user = await User.findOne({ where: { username: login.username } });

        if(!user) return res.error({error: 'username or password not found!'}, 404);

        const comparePass = bcrypt.compareSync(login.password, user.password);

        if(!comparePass) return res.error({error: 'username or password not found!'}, 404);

        const token = jwt.sign({ 
            display_name: user.display_name,
            username: user.username
        }, process.env.JWT_SECRET, { expiresIn: 60 * 60 });

        const update = await User.update(
            { access_token: token },
            { where: { id: user.id } }
        );

        return update ? res.success({ token }) : res.error({ error: 'token not update!' });
    } catch (error) {
        return res.error(error, 500);
    }
}

module.exports = {
    findUsername,
    insertUser,
    validateLogin
};