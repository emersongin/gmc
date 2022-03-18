'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
    /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
        static associate(models) {
            // define association here
        }
    }

    console.log(DataTypes);
    
    User.init({
        display_name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        password: DataTypes.STRING,
        password_lastupdate: DataTypes.DATE,
        user_validation: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return User;
};
