"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          name: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Go",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John No",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
