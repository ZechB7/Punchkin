const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
    {
        // to keep track of which player is who in future development
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        // keeping track of players level
        //!pulls information from gold
        //!when notified increments
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },  
        // keeping track of players race
        //!pulls information from play
        race: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        // keeping track of players class
        // pulls information from play
        class: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // keeping track of players held hand,
        // players hand can't be greater than 5 at the end of their turn. 
        // If it is the player must discard down to 5.
        // !if(hand > 5) {
        //     !don't end play
        // !}else{
        //     !end play
        // !}
        carried: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // keeps track of what cards are in play
        play: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // keeping track of what equipment the player can have in play
        // !pulls info from play
        hands: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // keeping track of players strength
        // !pulls info from play
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // keeping track of players gold
        // !stores info from discarded cards (i.e) defeated enemies/ sold items
        // !when >= 1000 set = 0 notify level to increment
        gold: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // keeping track of how much armor the player has
        // !increments when player has armor, headgear, or footgear
        // !cannot exceed 3 each must be unique
        armor: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // keeping track of what the player can add to run rolls
        // !pulls info from play
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