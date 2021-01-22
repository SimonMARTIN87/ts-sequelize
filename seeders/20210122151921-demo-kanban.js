'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // bulkInsert returns the raw inserted lines as objects, we use them for making consistent relations
    const [todoList, doneList] = await queryInterface.bulkInsert('lists', [
      {name: "Todo"},
      {name: "Done"}
    ], {
      returning: true
    });

    await queryInterface.bulkInsert('tickets', [
      {content: "faire la vaiselle", ListId: todoList.id },
      {content: "faire une démo TS+Sequelize", ListId: doneList.id },
      {content: "S'inscrire sur le discord de PampaTV", ListId: doneList.id}
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tickets', null, {});
    await queryInterface.bulkDelete('lists', null, {});
  }
};
