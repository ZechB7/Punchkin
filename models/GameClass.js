const {GameClass} = require('./Doorcard');
const sequelize = require('../config/connection');

class GameClass extends DoorCard {}

GameClass.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gameclass',
  }
);

module.exports = GameClass;
