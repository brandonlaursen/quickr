'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    userId: DataTypes.INTEGER,
    showroomId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Car.associate = function(models) {
    Car.belongsTo(models.User, { foreignKey: 'userId' });
    Car.hasMany(models.Comment, { foreignKey: 'CarId' });
  };
  return Car;
};
