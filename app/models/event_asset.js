'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Event_Asset extends Model {
        /**
        * Helper method for defining associations.
        * This method is not a part of Sequelize lifecycle.
        * The `models/index` file will call this method automatically.
        */
        static associate(models) {
        // define association here
        }
    }

    Event_Asset.init({
        id_event: DataTypes.BIGINT,
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        path: DataTypes.STRING,
        size: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Event_Asset',
        tableName: 'event_assets',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return Event_Asset;
};
