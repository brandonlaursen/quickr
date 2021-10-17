'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Comments', [
     {
      userId: 1,
      carId: 1,
      comment: 'Nice Car!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 1,
      carId: 2,
      comment: 'Beautiful picture',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 1,
      carId: 3,
      comment: 'I want that car!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 2,
      carId: 1,
      comment: 'WOW',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 2,
      carId: 2,
      comment: 'Amazing picture!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 2,
      carId: 3,
      comment: 'My dream car!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 3,
      carId: 1,
      comment: 'Super Awesome',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 3,
      carId: 2,
      comment: 'Fantastic!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 3,
      carId: 3,
      comment: 'Very nice!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 4,
      carId: 4,
      comment: 'Beautiful',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 4,
      carId: 5,
      comment: 'Super cool car',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 4,
      carId: 6,
      comment: 'Love it!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 5,
      carId: 4,
      comment: 'Speeeeeed',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 5,
      carId: 5,
      comment: 'I want that CAR!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 5,
      carId: 1,
      comment: 'Love the color',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 5,
      carId: 2,
      comment: 'Whats your top speed?',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 5,
      carId: 3,
      comment: 'How much?',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Comments', null, {});
  }
};
