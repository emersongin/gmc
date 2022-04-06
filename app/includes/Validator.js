module.exports = class Validator {

    static setup(data, validations, erros) {
        this.result = true;
        this.data = data || {};
        this.validations = validations || {};
        this.errors = erros || [];

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
            case 'number':
                return this.validateNumber(value, validation.params);
                break;
            case 'username':
                return this.validateUsername(value, validation.params);
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

    static validateRequired(value, required) {
        required = this.filterOneParams(required);

        return ((value !== null && value !== undefined && value !== '') && required);
    }

    static validateNumber(value, positive) {
        positive = this.filterOneParams(positive);

        if (isNaN(value)) return false;

        return positive ? Number(value) > 0 : Number(value);
    }

    static validateUsername(value, params) {
        params = this.filterOneParams(params);

        if(typeof value !=="string" || value.length <= 6) return false; 
        if(isNaN(value[0]) == false) return false;
        if(value.match(/ /gi) && value.match(/ /gi).length > 0) return false;

        return true;
    }

    static validateSize(value, params) {
        let [min, max] = this.filterMixMaxParams(params);
        let number = (Array.isArray(value) || typeof value === 'string') ? value.length : value;

        return number >= min && number <= max;
    }

    static sanitazationRequired(value) {
        return value;
    }

    static isInt(n){
        return Number(n) === n && n % 1 === 0;
    }
    
    static isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }

    static sanitazationNumber(value) {
        return isInt(value) ? parseInt(value) : isFloat(value) ? parseFloat(value) : Number(value);
    }

    static sanitizations(value, validation = { type: null, params: null }) {
        switch (validation.type) {
            case 'required':
                return this.sanitazationRequired(value, validation.params);
                break;
            case 'number':
                return this.sanitazationNumber(value, validation.params);
                break;
            default:
                return value;
                break;
        }
    }

}