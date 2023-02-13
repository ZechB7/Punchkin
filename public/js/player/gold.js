const {Player} = require('../../../models/player');
const sequelize = require('../../../config/connection');

class Gold extends Player {

    increment() {
        // increase based on defeated monster or sold items
        
    }

    reset() {
        // if greater than 1000 reset to 0 increase level
    }
}

module.exports = Gold