'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        username: 'demo_user',
        email: 'demo_user@example.com',
        password_hash: 'hashed_password', // Remplacez par un hash sécurisé
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'admin_user',
        email: 'admin_user@example.com',
        password_hash: 'hashed_password', // Remplacez par un hash sécurisé
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * await queryInterface.bulkDelete('Users', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
