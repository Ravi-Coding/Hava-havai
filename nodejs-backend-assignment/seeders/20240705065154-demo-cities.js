'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cities', [
      {
        id: 436,
        name: 'Agra',
        alt_name: '',
        country_id: 76,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        lat: 27.18,
        long: 78.02
      },
      {
        name: 'New York',
        country_id: 1, 
        is_active: true,
        lat: 40.7128,
        long: -74.0060,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Toronto',
        country_id: 2,
        is_active: true,
        lat: 43.651070,
        long: -79.347015,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
