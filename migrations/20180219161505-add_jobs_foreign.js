"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Jobs", "companyId", {
        type: Sequelize.INTEGER
      }),
      queryInterface.addConstraint("Jobs", ["companyId"], {
        type: "FOREIGN KEY",
        references: {
          name: "fk_Jobs_Company",
          table: "companies",
          field: "id"
        }
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Jobs", "companyId", {
        type: Sequelize.INTEGER
      }),
      queryInterface.removeConstraint("Jobs", "fk_Jobs_Company")
    ]);
  }
};
