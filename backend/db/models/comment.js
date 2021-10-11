'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Image, { foreignKey: 'carId' });
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Comment;
};
