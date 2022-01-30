'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Geolocation extends Model {
    /**
        * Helper method for defining associations.
        * This method is not a part of Sequelize lifecycle.
        * The `models/index` file will call this method automatically.
        */
        static associate(models) {
            // define association here
        }
    }

    Geolocation.init({
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
        latitude_delta: DataTypes.STRING,
        longitude_delta: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Geolocation',
        tableName: 'geolocations',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return Geolocation;
};
