
//Tables Treasure Cards
//  Collect Treasures in the form of
//  Items weapons/1 Hand or two Hand/Headgear/Armor/FootGear = gear_number

//STRETCH GOAL: special cards that do things once

//Tables Door Cards
//  Go though "DOOR CARDS" in the form of
//  Monsters Cards 
//  Curses Cards
//  Class Cards
//  Race Cards

//Tables Player Inventory
//  5 CARD MAX end of turn
//  PlayerBody Model to inclue Charater Values(User_Level, idle cards, Head, Body, Feet, LeftHand, RightHand)

//Objectives of Game
//  Reach Character Level of 10!!

//Start Of Play
//  Each Player Receives (x4 Treasure && x4 Door Cards)
//  Fist Player to go Choice:
//      Draw DOOR CARD if(MONSTER CARD then combat) 
//          if (user_level+gear_number > monster_level//else roll a number to run)
//              go up a level gain treasure card number on from monster card
//          else(
//              Look for Trouble: play MONSTER CARD from hand//
//              Loot the Room: draw DOOR CARD to hand)


//UPDATED BATTLE:
// on load: user gets 2 random treasure cards 
// // // const pick = Math.floor(Math.random() * 5) + 1; //////(returns values 1-5)
// cards pulled with const treasure = await Treasurecard.findOne({where: { id: `${pick}`}}); //////or something like that
// user may equip or discard treasure cards
// user must discard if too many cards (disable all buttons except discard if player too many cards)
// door kick draws monster 
// *equip OR hold OR discard treasure cards. Default hold.
// math.random to pick monster id findOne where id: = pick

// user can fight or flee (switch)

// if flee, math.random to "roll die", add buffs, do comparison

// if fight, compare stength = level + bonus vs. monster level

// // // if caught, lose. if get away, no treasure, back to the top

// if win, get treasure (using same code above) * however many treasures are on the monster card, level goes up by 1 or more according to monster card

// if lose, then bad stuff (usually down 1 level, maybe other things)

