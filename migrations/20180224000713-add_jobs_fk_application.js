'use strict';

const TABLE = 'Applications';
const FK = 'JobId';
const FK_TABLE = 'Jobs'
const FK_NAME = `fk_${TABLE}_${FK_TABLE}`;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(TABLE, FK, {
        type: Sequelize.INTEGER
      }),
      queryInterface.addConstraint(TABLE,[FK],{
        type:"FOREIGN KEY",
        references: {
          name: FK_NAME,
          table: FK_TABLE,
          field: 'id'
        }
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(TABLE, FK, {
        type: Sequelize.INTEGER
      }),
      queryInterface.removeConstraint(TABLE, FK_NAME)
    ]);
  }
};
