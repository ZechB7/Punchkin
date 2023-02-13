const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monster extends Model {}

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
    },
    buff: {
      type: DataTypes.BOOLEAN,
    },
    door_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'doorcard',
        key: 'id',
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'monster',
  }
);

module.exports = Monster;