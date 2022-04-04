module.exports = class Validator {
    static result = true;
    static data = {};
    static validations = {};
    static errors = [];

    static setup(data, validations) {
        this.data = data || {};
        this.validations = validations || {};

    }

    static errorsList() {
        return this.errors.map(erro => {
            return {
                key: erro.key,
                value: erro.value,
                validation: erro.validation.type,
                params: erro.validation.params
            };
        });
    }

    static dataList() {
        return this.data;
    }

    static validate() {
        let dataMap = Object.entries(this.data);

        dataMap = dataMap.map(data => {
            let [key, value] = data;

            let originData = { [key]: value };
            let validations = this.validations[key];

            if(originData && validations) {
                for (const validation of validations) {
                    if(this.validationTest(value, validation)) {
                        originData[key] = this.sanitizations(value, validation);
    
                        return originData;
    
                    } else {
    
                        this.result = false;
                        this.errors.push({ key, value, validation });
    
                        return originData;
                    };
                }

            }

        });

        this.data = dataMap.reduce((obj, data) => Object.assign(obj, data));

        return this.result;
    }

    static validationTest(value, validation = { type: null, params: null }) {
        switch (validation.type) {
            case 'required':
                return this.validateRequired(value, validation.params);
                break;
            case 'size':
                return this.validateSize(value, validation.params);
                break;
            default:
                return false;
                break;
        }
    }

    static filterOneParams(params) {
        return Array.isArray(params) ? params.shift() : params;
    }

    static filterMixMaxParams(params) {
        return Array.isArray(params) ? 
            params.length > 1 ? params : [params[0], Infinity] : [params, Infinity];
    }

    static validateRequired(value, params) {
        let required = this.filterOneParams(params);

        return (value && required);
    }

    static validateSize(value, params) {
        let [min, max] = this.filterMixMaxParams(params);
        let number = (Array.isArray(value) || typeof value === 'string') ? value.length : value;

        return number >= min && number <= max;
    }

    static sanitazationRequired(value) {
        return value;
    }

    static sanitizations(value, validation = { type: null, params: null }) {
        switch (validation.type) {
            case 'required':
                return this.sanitazationRequired(value, validation.params);
                break;
            default:
                return value;
                break;
        }
    }

}