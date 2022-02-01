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
                const usernameRegex = /^[^\d ]{4}[a-z_\d]{2,10}/g;
                const usernameSize = (value.length > 5 && value.length < 14);

                return usernameRegex.exec(value) && usernameSize;
            }
        },
        customSanitizer: {
            errorMessage: 'Nome de usuário deve conter pelo menos 8 caracteres.',
            options: value => {
                
                return value.toLowerCase();

            },
        },
    }
}), authController.usernameIsExist);

module.exports = routes;
