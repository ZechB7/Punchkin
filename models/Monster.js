const {DoorCard} = require('./Doorcard');
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Monster /*extends DoorCard*/ extends Model {}

Monster.init(
  {
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    treasureValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true,
    },
    buff: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'doorcard',
  }
);

module.exports = Monster;