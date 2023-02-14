const User = require('./User');
const Treasure = require('./TreasureCard');
const InstanceSave = require('./InstanceSave');
const Monster = require('./Monster');

const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
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