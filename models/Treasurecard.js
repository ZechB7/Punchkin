const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Treasure extends Model {}

Treasure.init(
    {
      id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      category: { // armor, headgear, footgear, 1/2 hand, big/small, oneshot, special
        type: DataTypes.STRING,
        allowNull: false,
      },
      bonus:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      keep: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      condition: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'treasure',
    }
);

module.exports = Treasure;