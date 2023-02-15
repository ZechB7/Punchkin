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
        buff: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        class: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        carried: { //actually an array of card id's
            type: DataTypes.STRING,
            allowNull: false,
        },
        in_play: { //actually an array of card id's
            type: DataTypes.STRING,
            allowNull: false,
        },
        headgear: {
            type: DataTypes.STRING,
        },
        armor: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hands: { //actually an array of card id's limit on front end of 2 items
            type: DataTypes.STRING,
            allowNull: false,
        },
        shoes: {
            type: DataTypes.STRING,
        },
        run: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        game_state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'instance_save',
    }
);

module.exports = InstanceSave;
