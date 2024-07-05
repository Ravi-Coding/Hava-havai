'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      icao_code: {
        type: Sequelize.STRING
      },
      iata_code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id'
        }
      },
      country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
          key: 'id'
        }
      },
      continent_id: {
        type: Sequelize.INTEGER
      },
      website_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      latitude_deg: {
        type: Sequelize.FLOAT
      },
      longitude_deg: {
        type: Sequelize.FLOAT
      },
      elevation_ft: {
        type: Sequelize.INTEGER
      },
      wikipedia_link: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Airports');
  }
};

