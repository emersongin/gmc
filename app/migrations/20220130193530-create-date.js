'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('dates', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date_current: {
                type: Sequelize.DATE
            },
            weather: {
                type: Sequelize.BIGINT
            },
            day_suffix: {
                type: Sequelize.STRING
            },
            day_name: {
                type: Sequelize.STRING
            },
            day_week: {
                type: Sequelize.INTEGER
            },
            day_month: {
                type: Sequelize.INTEGER
            },
            dia_quarter: {
                type: Sequelize.INTEGER
            },
            day_year: {
                type: Sequelize.INTEGER
            },
            week_month: {
                type: Sequelize.INTEGER
            },
            week_year: {
                type: Sequelize.INTEGER
            },
            week_year_iso: {
                type: Sequelize.STRING
            },
            month_current: {
                type: Sequelize.INTEGER
            },
            month_name: {
                type: Sequelize.STRING
            },
            month_name_short: {
                type: Sequelize.STRING
            },
            quarter_current: {
                type: Sequelize.INTEGER
            },
            quarter_name: {
                type: Sequelize.STRING
            },
            year_current: {
                type: Sequelize.INTEGER
            },
            first_day_week: {
                type: Sequelize.DATE
            },
            last_day_week: {
                type: Sequelize.DATE
            },
            first_day_month: {
                type: Sequelize.DATE
            },
            last_day_month: {
                type: Sequelize.DATE
            },
            first_day_quarter: {
                type: Sequelize.DATE
            },
            last_day_quarter: {
                type: Sequelize.DATE
            },
            first_day_year: {
                type: Sequelize.DATE
            },
            last_day_year: {
                type: Sequelize.DATE
            },
            mmyyyy: {
                type: Sequelize.STRING
            },
            mmddyyyy: {
                type: Sequelize.STRING
            },
            weekend: {
                type: Sequelize.BOOLEAN
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