const User = require('../models/User');

const show = async (req, res) => {
    const { id } = req.params;

    await User.sync();
    const user = await User.findByPk(id);

    return user === null ? res.json('Not found!') : res.json(user);
};

const store = async (req, res) => {
    const { name, password } = req.body;

    const user = await User.create({ name, password });

    return res.json(user);
};

const update = async (req, res) => {

};

const destroy = async (req, res) => {

};

module.exports = { show, store, update, destroy };
