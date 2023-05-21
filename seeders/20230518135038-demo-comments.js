'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments',[
      {
        date: '2023-05-18',
        blogID: 1,
        entry: "Good luck Me! This is me testing out my comments section. Let's see if it works!",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments',null,{});
  }
};