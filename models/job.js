'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {
    title: DataTypes.STRING
  });
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};