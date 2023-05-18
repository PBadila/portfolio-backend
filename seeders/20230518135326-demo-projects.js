'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects',[
      {
        name:'Simply Vegan',
        date: 'May 2023',
        description:'Simpy Vegan was a bootcamp group project with the purpose of creating a fullstack app - the frontend and the backend. We used JS Express and Sequelize to create an API and a database, which we hosted on Render.com and ElephantSQL and we used HTML, CSS, and Javascript to create the frontend and interact with the API. The other focus of this project was to become familiar with the team dynamics of user-driven projects with user stories and also collaborating with GitHub.',
        tools: 'Sequelize, JS Express, HTML, CSS, Javascript, GitHub',
        gitHub:'https://github.com/PBadila/simplyvegan-backend , https://github.com/PBadila/simplyvegan-frontEnd',
        video: 'https://simplyveganpresentation.onrender.com',
        link:'https://simplyvegan-frontend.onrender.com/',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects',null,{});
  }
};
