const User = require('../models/User');

const show = async (req, res) => {

};

const store = async (req, res) => {
    const { name, password } = req.body;

console.log(req);

    await User.sync();
    const user = await User.create({ name, password });

    return res.json(user);
};

const update = async (req, res) => {

};

const destroy = async (req, res) => {

};

module.exports = { show, store, update, destroy };
