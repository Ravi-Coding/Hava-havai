'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Airports', [
      {
        id: 145,
        icao_code: 'VIAG',
        iata_code: 'AGR',
        name: 'Agra Airport / Agra Air Force Station',
        type: 'medium_airport',
        city_id: 436,
        country_id: 76,
        continent_id: 1,
        website_url: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        latitude_deg: 27.157683,
        longitude_deg: 77.960942,
        elevation_ft: 551,
        wikipedia_link: ''
      },
      {
        icao_code: 'KJFK',
        iata_code: 'JFK',
        name: 'John F. Kennedy International Airport',
        type: 'large_airport',
        latitude_deg: 40.6413,
        longitude_deg: -73.7781,
        elevation_ft: 13,
        city_id: 1, 
        country_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        icao_code: 'CYYZ',
        iata_code: 'YYZ',
        name: 'Toronto Pearson International Airport',
        type: 'large_airport',
        latitude_deg: 43.6777,
        longitude_deg: -79.6248,
        elevation_ft: 569,
        city_id: 2, 
        country_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Airports', null, {});
  }
};
