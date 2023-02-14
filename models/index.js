const User = require('./User');
const InstanceSave = require('./InstanceSave');
const Treasure = require('./TreasureCard');
const Monster = require('./Monster');

User.hasOne(InstanceSave, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// User.hasOne(InstanceSave, {
//   foreignKey: 'user_name',
//   onDelete: 'CASCADE'
// });

// User.belongsTo(InstanceSave, {
//   foreignKey: 'user_name'
// });

InstanceSave.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(InstanceSave, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

InstanceSave.belongsTo(User, {
  foreignKey: 'user_id'
});

InstanceSave.hasMany(Treasure, {
  foreignKey: 'treasure_id'
});

InstanceSave.hasMany(Monster, {
  foreignKey: 'monster_id'
});

module.exports = { User, Project, InstanceSave, Treasure, Monster };