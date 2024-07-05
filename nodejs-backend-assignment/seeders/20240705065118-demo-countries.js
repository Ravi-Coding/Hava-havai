'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      {
        id: 76,
        name: 'India',
        alt_name: '',
        country_code_two: 'IN',
        country_code_three: 'IND',
        flag_app: '🇮🇳',
        mobile_code: 91,
        continent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 71,
        name: 'Guyana',
        alt_name: '',
        country_code_two: 'GY',
        country_code_three: 'GUY',
        flag_app: 'GY',
        mobile_code: 592,
        continent_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 72,
        name: 'Haiti',
        alt_name: '',
        country_code_two: 'HI',
        country_code_three: 'HTI',
        flag_app: 'HT',
        mobile_code: 509,
        continent_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 75,
        name: 'Iceland',
        alt_name: '',
        country_code_two: 'IS',
        country_code_three: 'ISL',
        flag_app: 'IS',
        mobile_code: 354,
        continent_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 79,
        name: 'Iraq',
        alt_name: '',
        country_code_two: 'IQ',
        country_code_three: 'IRQ',
        flag_app: 'IQ',
        mobile_code: 964,
        continent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'United States',
        country_code_two: 'US',
        country_code_three: 'USA',
        mobile_code: 1,
        continent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Canada',
        country_code_two: 'CA',
        country_code_three: 'CAN',
        mobile_code: 1,
        continent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
