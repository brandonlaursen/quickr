'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Cars', [
     {
     name: 'Dodge Demon',
     userId: 1,
     imageUrl: 'https://performancedrive.com.au/wp-content/uploads/2017/04/Dodge-Challenger-SRT-Demon-front.jpg',
     description: 'The Demon is the work of Dodge’s most hardcore guys who are car enthusiasts of the highest order.',
     createdAt: new Date(),
     updatedAt: new Date(),
    },
    {
      name: 'MCLAREN 650S SPIDER',
      userId: 1,
      imageUrl: 'https://s1.cdn.autoevolution.com/images/gallery/MCLAREN-650S-Spyder-5887_38.jpg',
      description: 'The 650S Can-Am honours the awe-inspiring and fearsome Can-Am race cars that first took to the track in 1966.',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Shelby Mustang',
      userId: 1,
      imageUrl: 'https://media.autoexpress.co.uk/image/private/s--bJ5K-l-n--/v1563182797/autoexpress/2019/01/01_15.jpg',
      description: 'As the most powerful and quickest factory Mustang ever, the Ford Mustang Shelby GT500 blends modern sports-car performance with iconic muscle-car presence.',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Camaro',
      userId: 1,
      imageUrl: 'https://static2.hotcarsimages.com/wordpress/wp-content/uploads/2020/04/2020-chevrolet-camaro-zl1-1le.jpg',
      description: 'The 2021 Chevrolet Camaro is a sports car first and muscle car second. ',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Ferrari Portofino',
      userId: 1,
      imageUrl: 'https://media.autoexpress.co.uk/image/private/s--PG6nm5RE--/v1563182798/autoexpress/2018/08/01_17.jpg',
      description: 'The Portofino M is everything a Ferrari should be: sexy, powerful, and fast.',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Lamborghini Murcielago',
      userId: 1,
      imageUrl: 'http://4.bp.blogspot.com/-K9qo-94Gxbs/ULtAPbMk4lI/AAAAAAAAFS8/WrFYXvJDCIg/s1600/2011+EDO+Lamborghini+Murcielago+LP750+1.jpg',
      description: 'The Lamborghini Murciélago is a sports car produced by Italian automotive manufacturer Lamborghini between 2001 and 2009.',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Bugatti Veyron',
      userId: 1,
      imageUrl: 'https://st.automobilemag.com/uploads/sites/11/2014/02/2013-bugatti-veyron-grand-sport-vitesse-three-quarters-6.jpg',
      description: 'The Bugatti Veyron has been regarded as a supercar of superlative quality.',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Nissan GT-R',
      userId: 4,
      imageUrl: 'https://www.automobilesreview.com/gallery/2019-nissan-gt-r/2019-nissan-gt-r-01.jpg',
      description: 'Call it a dinosaur. Mock the Nissan parts bin interior. Declare it overpriced versus newer sports cars. The 2021 Nissan GT-R doesn’t mind. It’s still Godzilla, and it will still rip your head off with pleasure.',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Mercedes-Benz AMG GT',
      userId: 2,
      imageUrl: 'https://netcarflix.sfo2.digitaloceanspaces.com/2020/07/2021-Mercedes-Benz-AMG-GT-Black-Series-24.jpg',
      description: 'Enter the 2021 Mercedes-AMG GT Coupe and GT Roadster, as stylish as ever, but now even more formidable. ',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Porsche 911R',
      userId: 3,
      imageUrl: 'https://www.exoticcarlist.com/blog/wp-content/uploads/2015/10/2015-porsche-911-gt3-front-three-quarter.jpg',
      description: 'The 911 has been raced extensively by private and factory teams, in a variety of classes. It is among the most successful competition cars.',
      createdAt: new Date(),
      updatedAt: new Date(),
     },


  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Cars', null, {});
  }
};
