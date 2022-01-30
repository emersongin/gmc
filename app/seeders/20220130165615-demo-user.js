'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        /**
            * Add seed commands here.
            *
            * Example:
            * await queryInterface.bulkInsert('People', [{
            *   name: 'John Doe',
            *   isBetaMember: false
            * }], {});
        */
        return queryInterface.bulkInsert('users', [{
            display_name: 'Gin Andrey',
            username: 'andrey@master',
            email: 'emersonandrey_7@hotmail.com',
            phone_number: '81999205463',
            password: '',
            password_lastupdate: new Date(),
            user_validation: false,
            created_at: new Date(),
            updated_at: new Date()
        }]);
    },

    async down (queryInterface, Sequelize) {
        /**
        * Add commands to revert seed here.
        *
        * Example:
        * await queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('users', null, {});
    }
};
