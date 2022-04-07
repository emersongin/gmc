'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            display_name: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
                validate: {
                    len: [6, 20]
                },
            },
            email: {
                type: Sequelize.STRING,
                validate: {
                    isEmail: true,
                },
            },
            phone_number: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING(64),
                validate: {
                    is: /^[0-9a-f]{64}$/i
                },
            },
            password_lastupdate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            user_validation: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            access_token: {
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};
