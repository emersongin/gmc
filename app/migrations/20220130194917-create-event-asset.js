'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('event_assets', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        id_event: {
            type: Sequelize.BIGINT,
            references: {
                model: {
                    tableName: 'events',
                },
                key: 'id'
            },
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        path: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('event_assets');
    }
};
