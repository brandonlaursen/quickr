'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Cars', [
     {
     name: 'Dodge Demon',
     userId: 1,
     showroomId: 1,
     imageUrl: 'https://performancedrive.com.au/wp-content/uploads/2017/04/Dodge-Challenger-SRT-Demon-front.jpg',
     description: 'The Demon is the work of Dodge’s most hardcore guys who are car enthusiasts of the highest order.',
     createdAt: new Date(),
     updatedAt: new Date(),
    },
    {
      name: 'MCLAREN 650S SPIDER',
      userId: 1,
      showroomId: 1,
      imageUrl: 'https://s1.cdn.autoevolution.com/images/gallery/MCLAREN-650S-Spyder-5887_38.jpg',
      description: 'The 650S Can-Am honours the awe-inspiring and fearsome Can-Am race cars that first took to the track in 1966.',
      createdAt: new Date(),
      updatedAt: new Date(),
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Cars', null, {});
  }
};
