const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const {user} = require('./user')


class InstanceSave extends Model {}

InstanceSave.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'name',
      }
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    race: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack_bonus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cards_in_hand: { //actually array in string form
      type: DataTypes.STRING,
    }, 
    headgear: {
      type: DataTypes.STRING,
    },
    armor: {
      type: DataTypes.STRING,
    },
    hand1: {
      type: DataTypes.STRING,
    },
    hand2: {
      type: DataTypes.STRING,
    },
    shoes: {
      type: DataTypes.STRING,
    },
    game_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monster: {
      type: DataTypes.STRING,
    },

   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'instancesave',
  }
);

module.exports = InstanceSave;
