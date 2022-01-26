const { DataTypes, Model } = require('sequelize');

const fields = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    display_name: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
};

class User extends Model {
    static init(sequelize) {
        super.init(fields, { 
            sequelize, 
            modelName: 'User',
            tableName: 'users',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });

    }
};

module.exports = User;
