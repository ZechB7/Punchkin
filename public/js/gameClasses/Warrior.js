const {GameClass} = require('../../models/GameClass');
const sequelize = require('../../config/connection');
const DoorCard = require('../../../models/Doorcard');

class Warrior extends DoorCard {

  buff() {
    //logic to adjust player stats in local memory
  }

}


module.exports = Warrior;
