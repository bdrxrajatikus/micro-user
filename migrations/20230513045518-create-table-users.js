'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
       id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNullL: false
       },
       name: {
        type: Sequelize.STRING,
        allowNull: false
       },
       profession: {
        type: Sequelize.STRING,
        allowNull: true
       },
       avatar: {
        type: Sequelize.STRING,
        allowNull: true
       },
       role: {
        type: Sequelize.ENUM,
        values: ['admin', 'student'],
        allowNull: false
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false
       },
       password: {
        type: Sequelize.STRING,
        allowNull: false
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false
       }
    });

    await queryInterface.addConstraint('users', {
      type: 'unique',
      fields: ['email'],
      name: 'UNIQUE_USERS_EMAIL'
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');

  }
};
