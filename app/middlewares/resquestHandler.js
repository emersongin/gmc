const Validator = require('../includes/Validator');

module.exports = (req, res, next) => {
    req.Validator = Validator; 
    req.Validator.setup();

    next();
};

    // example:
    //
    // let data = {
    //     id: true,
    //     username: 'gin'
    // };
    
    // let validations = {
    //     id: [
    //         {type: 'required', params: true}
    //     ],
    //     username: [
    //         {type: 'size', params: [0, 3]}
    //     ]
    // }
    
    // const Validator = require('../app/includes/Validator');
    
    // Validator.setup(data, validations);
    
    // console.log(Validator.validate() ? Validator.dataList() : Validator.errorsList());
    