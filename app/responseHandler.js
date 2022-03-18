module.exports = (req, res, next) => {

    const success = data => {
        res.status(200);

        return {
            result: true,
            status: 200,
            data
        };
    };

    const error = error => {
        res.status(400);

        return {
            result: false,
            status: 400,
            data: error
        };
    };

    res.success = success;
    res.error = error;

    next();
}
