const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization || req.body.authorization || req.query.authorization;

    if(!token) return res.error({ erro: 'token not provided!' });

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        req.auth = { user: payload };

    } catch(error) {
        return res.error(error, 401);

    }

    next();
};
