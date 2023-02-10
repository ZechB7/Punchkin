const User = require('./User');
const DoorCard = require('./Doorcard.js');
const TreasureCard = require('./TreasureCard');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };