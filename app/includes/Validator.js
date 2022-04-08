module.exports = class Validator {

    static setup(data, validations, erros) {
        this.result = true;
        this.data = data || {};
        this.validations = validations || {};
        this.errors = erros || [];

    }

    static errorsList() {
        return this.errors.map(erro => {
            return erro;
        });
    }

    static dataList() {
        return this.data;
    }

    static validate() {
        if(Object.keys(this.data).length === 0) {
            this.errors.push({ error: 'some params are required!' });
            return false; 
        }

        let dataMap = Object.entries(this.data);

        dataMap = dataMap.map(data => {
            let [key, value] = data;

            let originData = { [key]: value };
            let validations = this.validations[key];

            if(originData && validations) {
                for (const validation of validations) {  console.log(validation);
                    if(this.validationTest(value, validation)) {
                        originData[key] = this.sanitizations(value, validation);

                    } else {
    
                        this.result = false;
                        this.errors.push({ key, value, validation });

                    };
                }
            }

            return originData;
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
            case 'text':
                return this.validateText(value, validation.params);
                break;
            case 'username':
                return this.validateUsername(value, validation.params);
                break;
            case 'email':
                return this.validateEmail(value, validation.params);
                break;
            case 'password':
                return this.validatePassword(value, validation.params);
                break;
            case 'brazilianPhoneNumber':
                return this.validateBrazilianPhoneNumber(value, validation.params);
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

    static validateText(value, params) {
        params = this.filterOneParams(params);

        if (typeof value !== 'string') return false;

        return params;
    }

    static validateUsername(value, params) {
        params = this.filterOneParams(params);

        if(typeof value !=="string" || value.length <= 6 || value.length > 20) return false; 
        if(isNaN(value[0]) == false) return false;
        if(value.match(/ /gi) && value.match(/ /gi).length > 0) return false;

        return params;
    }

    static validateEmail(value, params) {
        params = this.filterOneParams(params);

        let match = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

        return match && match.length > 0 && params;
    }

    static validatePassword(value, params) {
        params = this.filterOneParams(params);

        let match = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/);

        if(typeof value !=="string" || !match) return false; 

        return params;
    }

    static validateBrazilianPhoneNumber(value, params) {
        let match = value.match(/\(?\d{2,}\)?\ ??\ ?\d{4,}\-?\d{4}/g);

        return match && match.length > 0 && params;
    }

    static validateSize(value, params) {
        let [min, max] = this.filterMixMaxParams(params);
        let number = (Array.isArray(value) || typeof value === 'string') ? value.length : value;

        return number >= min && number <= max;
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

    static sanitazationEmail(value) {
        return value.toLowerCase();
    }

    static sanitazationBrazilianPhoneNumber(value) {
        return value.replace(/[^\d]/g, '');
    }

    static sanitizations(value, validation = { type: null }) {
        switch (validation.type) {
            case 'number':
                return this.sanitazationNumber(value);
                break;
            case 'email':
                return this.sanitazationEmail(value);
                break;
            case 'brazilianPhoneNumber':
                return this.sanitazationBrazilianPhoneNumber(value);
                break;
            default:
                return value;
                break;
        }
    }

}