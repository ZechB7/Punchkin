const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const {user} = require('./user')


class InstanceSave extends Model {}

<<<<<<< HEAD
InstanceSave.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // user_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: 'user',
    //     key: 'name',
    //   }
    // },
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
    cards_in_hand: { //may need PostgreSQL
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
=======
// InstanceSave.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     // user_name: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false,
//     //   references: {
//     //     model: 'user',
//     //     key: 'name',
//     //   }
//     // },
//     level: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     race: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     class: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     attack_bonus: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     // cards_in_hand: { //may need PostgreSQL
//     //   type: DataTypes.STRING,
//     // }, 
//     headgear: {
//       type: DataTypes.STRING,
//     },
//     armor: {
//       type: DataTypes.STRING,
//     },
//     hand1: {
//       type: DataTypes.STRING,
//     },
//     hand2: {
//       type: DataTypes.STRING,
//     },
//     shoes: {
//       type: DataTypes.STRING,
//     },
//     game_state: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     monster: {
//       type: DataTypes.STRING,
//     },
>>>>>>> 9b0cc90a941061b2ad6d9b66f5f22c1e09e501a7

   
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'instancesave',
//   }
// );

module.exports = InstanceSave;