'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('adresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            prefix_type: {
                type: Sequelize.STRING
            },
            public_place: {
                type: Sequelize.STRING
            },
            number: {
                type: Sequelize.INTEGER
            },
            complement: {
                type: Sequelize.STRING
            },
            zone: {
                type: Sequelize.STRING
            },
            id_region: {
                type: Sequelize.BIGINT,
                references: {
                    model: {
                        tableName: 'regions',
                    },
                    key: 'id'
                },
            },
            zip_code: {
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
        await queryInterface.dropTable('adresses');
    }
};
