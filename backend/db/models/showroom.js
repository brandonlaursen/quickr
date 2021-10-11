'use strict';
module.exports = (sequelize, DataTypes) => {
  const Showroom = sequelize.define('Showroom', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Showroom.associate = function(models) {
    Showroom.belongsTo(models.User, { foreignKey: 'userId' });
    Showroom.hasMany(models.Image, { foreignKey: 'showroomId' });
  };
  return Showroom;
};
