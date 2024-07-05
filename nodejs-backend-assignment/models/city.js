'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT
  }, {});
  City.associate = function(models) {
    City.belongsTo(models.Country, { foreignKey: 'country_id' });
    City.hasMany(models.Airport, { foreignKey: 'city_id' });
  };
  return City;
};
