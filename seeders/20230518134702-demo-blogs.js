'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Blogs',[
      {
        date: '2023-05-18',
        title:'The Blog Project',
        affirmation:'I believe in myself and my ability to make the most of this fresh start.',
        entry: "'The end of my coding bootcamp is near.  I can't believe how quickly 4 months have gone by! This week, we are working on our resumes and portfolios.  I decided not to buy a template and opted, instead, to create my own using React, which we learned earlier this week.  Then, I had the bright idea to use what I know about creating a database with sequelize and routes with JS Express, combined with my new React superpowers to create a blog for my portfolio as one of my projects.  This is my seeder entry to test out and make sure it works.  Wish me luck... '",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Blogs',null,{});
  }
};
