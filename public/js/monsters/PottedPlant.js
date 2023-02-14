const {Monster} = require('../../models/Monster');
const sequelize = require('../../config/connection');

class PottedPlant extends Monster {
  
  buff() {
    //set player runaway stats +5 in local memory

    //if elf 
  }

  badStuff() {
    console.log("You walked away from the plant.")
  }
}

module.exports = PottedPlant;
