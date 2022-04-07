module.exports = (req, res, next) => {
    const respond = params => {
        res.status(params.status);
        
        return res.json(params.data);
    };

    const success = (data, codeStatus) => {
        return respond({
            status: codeStatus || 200,
            data: data || []
        });
    };
    
    const error = (error, codeStatus) => {
        return respond({
            status: codeStatus || 400,
            data: error || []
        });
    };

    res.success = success;
    res.error = error;

    next();
};
