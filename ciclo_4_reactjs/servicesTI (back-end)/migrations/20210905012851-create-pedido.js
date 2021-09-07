'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ClienteId: {
        allowNull: false, //allowNull: FALSE FAZ COM QUE O DADO INSERIDO SEJA OBRIGATÓRIO
        type: Sequelize.INTEGER,
        references:{
          model: 'clientes', //REFERENCIA A BASE DE DADOS
          key: 'id' // COM A CHAVE PRIMÁRIA ID
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      ServicoId: {
        allowNull: false, //allowNull: FALSE FAZ COM QUE O DADO INSERIDO SEJA OBRIGATÓRIO
        type: Sequelize.INTEGER,
        references:{
          model: 'servicos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      valor: {
        type: Sequelize.FLOAT(6,2)
      },
      data: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pedidos');
  }
};