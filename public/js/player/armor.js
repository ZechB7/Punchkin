const {Player} = require('../../../models/player');
const sequelize = require('../../../config/connection');

class Armor extends Player {
    // headgear
        // cannot exceed 1
    // armor
        // cannot exceed 1
    // footgear
        // cannot exceed 1
    // if any exceed 1 force player discard new vs old
}

module.exports = Armor;