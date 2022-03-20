module.exports = (req, res, next) => {
    const respond = params => {
        res.status(params.status);
        
        return res.json({
            result: params.result,
            status: params.status,
            data: params.data
        });
    };

    const success = (data, codeStatus) => {
        return respond({
            result: true,
            status: codeStatus || 200,
            data: data || []
        });
    };
    
    const error = (error, codeStatus) => {
        return respond({
            result: false,
            status: codeStatus || 400,
            data: error || []
        });
    };

    res.success = success;
    res.error = error;

    next();
};
