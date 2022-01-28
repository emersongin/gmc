const express = require('express');
const { checkSchema  } = require('express-validator');
const authController = require('../../controllers/AuthController');
const routes = express.Router();

routes.get('/isusername', checkSchema({
    username: {
        isLength: {
            errorMessage: 'Nome de usuário deve conter pelo menos 8 caracteres.',
            options: { min: 8 },
        },
        custom: {
            errorMessage: 'Nome de usuário inválido.',
            options: value => {
                const phoneNumber = value.replace(/[^0-9]/g, '');

                const initNumbers = (/^[0-9]{3}/g).exec(phoneNumber);
                const startPhoneNumber = (/^[1-9]{2}9/g).exec(phoneNumber);

                if(startPhoneNumber) return (phoneNumber.length === 11) ? true : false;
                if(initNumbers) return (startPhoneNumber) ? true : false;

                return true;
            }
        },
        customSanitizer: {
            errorMessage: 'Nome de usuário deve conter pelo menos 8 caracteres.',
            options: value => {
                const phoneNumber = value.replace(/[^0-9]/g, '');
                const isPhoneNumber = (/^[1-9]{2}9/g).exec(phoneNumber);

                if(isPhoneNumber) return phoneNumber;

                return value;

            },
        },
    }
}), authController.usernameIsExist);

module.exports = routes;
