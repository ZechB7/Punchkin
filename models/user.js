const { Model, DataTypes } = require('sequelize');
const simplecrypt = require('simplecrypt');
const sequelize = require('../config/connection');
var sc = simplecrypt();

class User extends Model {
  checkPassword(loginPw) {
    if (loginPw === sc.decrypt(this.password)) {
      return true
    } else {
      return false
    }
  }
}
// return sc.compareSync(loginPw, this.password);

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    //wins and losses
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: 0,
    },
    losses: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: 0,
    },

  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await sc.encrypt(newUserData.password);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await sc.encrypt(updatedUserData.password);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;