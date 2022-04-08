const authRepository = require('./authRepository');

const username = async (req, res) => {
    req.Validator.setup(req.params, {
        username: [
            { type: 'username', params: true },
        ]
    });

    if(req.Validator.validate()) {
        req.params = req.Validator.dataList();
    } else {
        return res.error(req.Validator.errorsList());
    }

    const { username } = req.params;

    return authRepository.findUsername(username, res);
}

const createAccont = async (req, res) => {
    req.Validator.setup(req.body, {
        username: [
            { type: 'username', params: true },
        ],
        email: [
            { type: 'email', params: true },
        ],
        phone_number: [
            { type: 'brazilianPhoneNumber', params: true },
        ],
        password: [
            { type: 'password', params: true },
        ],
    });

    if(req.Validator.validate()) {
        req.body = req.Validator.dataList();
    } else {
        return res.error(req.Validator.errorsList());
    }

    const user = req.body;

    return authRepository.insertUser(user, res);
};

const login = async (req, res) => {
    req.Validator.setup(req.body, {
        username: [
            { type: 'text', params: true },
            { type: 'size', params: [3] },
        ],
        password: [
            { type: 'text', params: true },
            { type: 'size', params: [3] },
        ],
    });

    if(req.Validator.validate()) {
        req.body = req.Validator.dataList();
    } else {
        return res.error(req.Validator.errorsList());
    }

    const user = req.body;

    return res.success(user);

};

const validateToken = async (req, res) => {
};

module.exports = { 
    username, 
    createAccont,
    login, 
    validateToken
};
