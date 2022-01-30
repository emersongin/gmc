'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Calendar extends Model {
        /**
        * Helper method for defining associations.
        * This method is not a part of Sequelize lifecycle.
        * The `models/index` file will call this method automatically.
        */
        static associate(models) {
            // define association here
        }
    }
    
    Calendar.init({
        year: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Calendar',
        tableName: 'calendars',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return Calendar;
};