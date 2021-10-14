'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        profilePicUrl: 'https://www.rxwallpaper.site/wp-content/uploads/exotic-cars-wallpapers-wallpaper-cave-epic-car-wallpapers-2.jpg',
        description: 'Hello Demo User'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: 'https://www.rxwallpaper.site/wp-content/uploads/exotic-cars-wallpapers-wallpaper-cave-epic-car-wallpapers-2.jpg',
        description: 'Hello Demo User'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: 'https://www.rxwallpaper.site/wp-content/uploads/exotic-cars-wallpapers-wallpaper-cave-epic-car-wallpapers-2.jpg',
        description: 'Hello Demo User'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
