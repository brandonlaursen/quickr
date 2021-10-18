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
        profilePicUrl: 'https://avatarfiles.alphacoders.com/127/127499.jpg',
        description: 'Hello Demo User'
      },
      {
        email: faker.internet.email(),
        username: 'CarFantatic',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: 'https://images.statusfacebook.com/profile_pictures/cars/cars_profile_pictures_08.jpg',
        description: 'Hello'
      },
      {
        email: faker.internet.email(),
        username: 'SpeedRacer',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: 'https://www.rxwallpaper.site/wp-content/uploads/exotic-cars-wallpapers-wallpaper-cave-epic-car-wallpapers-2.jpg',
        description: 'Hello'
      },
      {
        email: faker.internet.email(),
        username: 'CarLover2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: 'http://topworldauto.com/photos/d7/c7/lightning-mcqueen-red-car-from-disney-39-s-movie-cars-625.jpg',
        description: 'Hello'
      },
      {
        email: faker.internet.email(),
        username: 'DodgeFan',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: 'https://moneyinc.com/wp-content/uploads/2020/11/BMW-Steering-Wheel.jpg',
        description: 'Hello'
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
