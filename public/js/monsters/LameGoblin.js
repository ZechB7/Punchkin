const {Monster} = require('../../models/Monster');
const sequelize = require('../../config/connection');

class LameGoblin extends Monster {

  buff() {
    //set player runaway stats +1 in local memory

    //may be conditional
  }

  badStuff() {
    //player level -1 level
  }
}

module.exports = LameGoblin;
