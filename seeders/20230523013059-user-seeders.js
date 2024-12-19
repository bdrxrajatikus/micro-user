'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
    {
      name: "Arief",
      profession: "Admin Micro",
      role: "admin",
      email: "mariefkurniawan64@gmail.com",
      password: await bcrypt.hash('sontolmodod', 10),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: "Rahmi",
      profession: "SEO Content Creator",
      role: "student",
      email: "rahmidwialyanii@gmail.com",
      password: await bcrypt.hash('rahmidwialyani', 10),
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
