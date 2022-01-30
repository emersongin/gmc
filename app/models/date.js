'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Date extends Model {
        /**
        * Helper method for defining associations.
        * This method is not a part of Sequelize lifecycle.
        * The `models/index` file will call this method automatically.
        */
        static associate(models) {
        // define association here
        }
    }

    Date.init({
        date_current: DataTypes.DATE,
        weather: DataTypes.BIGINT,
        day_suffix: DataTypes.STRING(4),
        day_name: DataTypes.STRING(15),
        day_week: DataTypes.INTEGER,
        day_month: DataTypes.INTEGER,
        dia_quarter: DataTypes.INTEGER,
        day_year: DataTypes.INTEGER,
        week_month: DataTypes.INTEGER,
        week_year: DataTypes.INTEGER,
        week_year_iso: DataTypes.STRING(10),
        month_current: DataTypes.INTEGER,
        month_name: DataTypes.STRING(9),
        month_name_short: DataTypes.STRING(3),
        quarter_current: DataTypes.INTEGER,
        quarter_name: DataTypes.STRING(9),
        year_current: DataTypes.INTEGER,
        first_day_week: DataTypes.DATE,
        last_day_week: DataTypes.DATE,
        first_day_month: DataTypes.DATE,
        last_day_month: DataTypes.DATE,
        first_day_quarter: DataTypes.DATE,
        last_day_quarter: DataTypes.DATE,
        first_day_year: DataTypes.DATE,
        last_day_year: DataTypes.DATE,
        mmyyyy: DataTypes.STRING(9),
        mmddyyyy: DataTypes.STRING(10),
        weekend: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Date',
        tableName: 'dates',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return Date;
};
