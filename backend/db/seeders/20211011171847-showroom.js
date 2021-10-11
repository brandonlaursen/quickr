'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Showrooms', [{
     userId: 1,
     title: 'Demo Showroom',
     description: 'My showroom',
     createdAt: new Date(),
     updatedAt: new Date(),
   }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Showrooms', null, {});
  }
};
