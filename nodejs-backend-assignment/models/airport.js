'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('Airport', {
    icao_code: DataTypes.STRING,
    iata_code: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    latitude_deg: DataTypes.FLOAT,
    longitude_deg: DataTypes.FLOAT,
    elevation_ft: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER
  }, {});
  Airport.associate = function(models) {
    Airport.belongsTo(models.City, { foreignKey: 'city_id' });
    Airport.belongsTo(models.Country, { foreignKey: 'country_id' });
  };
  return Airport;
};
