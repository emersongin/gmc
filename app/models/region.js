'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Region extends Model {
        /**
        * Helper method for defining associations.
        * This method is not a part of Sequelize lifecycle.
        * The `models/index` file will call this method automatically.
        */
        static associate(models) {
        // define association here
        }
    }
    
    Region.init({
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        region: DataTypes.STRING,
        uf: DataTypes.STRING,
        id_geolocation: DataTypes.BIGINT
    }, {
        sequelize,
        modelName: 'Region',
        tableName: 'regions',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return Region;
};