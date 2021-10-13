'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    showroomId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Car.associate = function(models) {
    Car.belongsTo(models.User, { foreignKey: 'userId' });
    Car.hasMany(models.Comment, { foreignKey: 'carId', onDelete: 'CASCADE', hooks: true});
  };
  return Car;
};
