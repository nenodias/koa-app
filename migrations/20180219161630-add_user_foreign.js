'use strict';
const TABLE = "Companies";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(TABLE, "UserId", {
        type: Sequelize.INTEGER
      }),
      queryInterface.addConstraint(TABLE,["UserId"],{
         type: "FOREIGN KEY",
         references:{
           name:"fk_Companies_User",
           table: "Users",
           field: "id",
         }
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(TABLE, "UserId", {
        type: Sequelize.INTEGER
      }),
      queryInterface.removeConstraint(TABLE, "fk_Companies_User")
    ]);
  }
};
