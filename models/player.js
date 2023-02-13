const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        level: {
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
        carried: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        play: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hands: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gold: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        armor: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        run: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'player',
    }
);

module.exports = Player;