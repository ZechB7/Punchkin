const {Player} = require('../../../models/player');
const sequelize = require('../../../config/connection');

class Carried extends Player {
    // cannot exceed 5
    // if exceeds 5 force player discard down to 5
}

module.exports = Carried;