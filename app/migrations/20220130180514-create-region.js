'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('regions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            city: {
                type: Sequelize.STRING
            },
            state: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            region: {
                type: Sequelize.STRING
            },
            uf: {
                type: Sequelize.STRING
            },
            id_geolocation: {
                type: Sequelize.BIGINT,
                references: {
                    model: {
                        tableName: 'geolocations',
                    },
                    key: 'id'
                },
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
        // does not do anything
    }
};
