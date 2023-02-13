const User = require('./User');
const InstanceSave = require('./InstanceSave');
const Treasure = require('./TreasureCard');
const Monster = require('./Monster');



User.hasOne(InstanceSave, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

InstanceSave.belongsTo(User, {
  foreignKey: 'user_id'
});


InstanceSave.hasMany(Treasure, {
  foreignKey: 'card_id',
});

InstanceSave.hasMany(Monster, {
  foreignKey: 'card_id'
})

module.exports = { User, InstanceSave, Treasure, Monster};