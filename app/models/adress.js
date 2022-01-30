'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Adress extends Model {
        /**
        * Helper method for defining associations.
        * This method is not a part of Sequelize lifecycle.
        * The `models/index` file will call this method automatically.
        */
        static associate(models) {
        // define association here
        }
    }
    
    Adress.init({
        prefix_type: DataTypes.STRING,
        public_place: DataTypes.STRING,
        number: DataTypes.INTEGER,
        complement: DataTypes.STRING,
        zone: DataTypes.STRING,
        id_region: DataTypes.BIGINT,
        zip_code: DataTypes.STRING,
        id_geolocation: DataTypes.BIGINT
    }, {
        sequelize,
        modelName: 'Adress',
        tableName: 'adresses',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return Adress;
};
