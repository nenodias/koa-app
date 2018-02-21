'use strict';
module.exports = (sequelize, DataTypes) => {
  var Candidate = sequelize.define('Candidate', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Candidate.belongsToMany(models.Job, {
          through: 'Application'
        });
      }
    }
  });
  return Candidate;
};