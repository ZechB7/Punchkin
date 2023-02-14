const {Monster} = require('../../models/Monster');
const sequelize = require('../../config/connection');

class MaulRat extends Monster {


  buff() {
    //set player runaway stats +5 in local memory

    //if elf 
  }

  badStuff() {
    console.log('You got beat by a Rat.')
  }
}


module.exports = MaulRat;