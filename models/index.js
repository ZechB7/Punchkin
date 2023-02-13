const User = require('./User');
const DoorCard = require('./Doorcard');
const Monster = require('./Monster');
const TreasureCard = require('./TreasureCard');
const InstanceSave = require('./InstanceSave');

const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, DoorCard, Monster };