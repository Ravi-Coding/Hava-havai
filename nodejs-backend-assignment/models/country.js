'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    country_code_two: DataTypes.STRING,
    country_code_three: DataTypes.STRING,
    mobile_code: DataTypes.INTEGER,
    continent_id: DataTypes.INTEGER
  }, {});
  Country.associate = function(models) {
    Country.hasMany(models.City, { foreignKey: 'country_id' });
  };
  return Country;
};
