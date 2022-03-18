const { QueryTypes } = require('../../models').Sequelize;
const sequelize = require('../../models').sequelize;
const User = require('../../models').User;

const show = async (req, res) => {
    const { id } = req.params;

    const sql = `
        SELECT
            u.id,
            u.display_name,
            u.username,
            u.email,
            u.phone_number,
            u.password,
            u.password_lastupdate,
            u.user_validation,
            u.created_at,
            u.updated_at
        FROM
            users u
        WHERE
            u.id = $id
    `;

    const [ result ] = await sequelize.query(sql,
        {
            bind: { id }, 
            type: QueryTypes.SELECT
        }
    );

    return result ? res.json(result) : res.json(false);
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
