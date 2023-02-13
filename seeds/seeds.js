// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();
const sequelize = require('../config/connection');
const { User } = require('../models');
const Treasure = require('../models/Treasurecard');
const Monster = require('../models/Monster');
const monsterData = require('./monsterData.json');
const treasureData = require('./treasureData.json');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const monsters = await Monster.bulkCreate(monsterData);

  const treasures = await Treasure.bulkCreate(treasureData);
  

  
  process.exit(0);
};
seedDatabase();