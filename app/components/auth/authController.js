const authRepository = require('./authRepository');

const username = async (req, res) => {
    req.Validator.setup(req.params, {
        username: [
            { type: 'username', params: true }
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
            { type: 'username', params: true }
        ],
        email: [
            { type: 'email', params: true }
        ],
        phone_number: [
            { type: 'brazilianPhoneNumber', params: true }
        ],
        password: [
            { type: 'password', params: true }
        ],
    });

    if(req.Validator.validate()) {
        req.body = req.Validator.dataList();
    } else {
        return res.error(req.Validator.errorsList());
    }

    return res.success(req.body);

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
