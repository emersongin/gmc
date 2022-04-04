const { QueryTypes } = require('../../models').Sequelize;
const sequelize = require('../../models').sequelize;
const User = require('../../models').User;

const show = async (req, res) => {

    req.Validator.setup(req.params, {
        id: [
            {type: 'required', params: true}
        ]
    });

    if(req.Validator.validate()) {
        req.params = req.Validator.dataList();
    } else {
        return res.error(req.Validator.errorsList());
    }

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

    return result ? res.success(result) : res.error(false, 204);
};

const store = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({ username, password });

        return res.success(user, 201);
    } catch (error) {
        return res.error(error, 500);
    }

};

const update = async (req, res) => {
};

const destroy = async (req, res) => {
};

module.exports = { show, store, update, destroy };
