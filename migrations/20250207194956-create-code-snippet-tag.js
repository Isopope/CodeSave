'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CodeSnippetTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codeSnippetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CodeSnippets',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      tagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tags',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('CodeSnippetTags', {
      fields: ['codeSnippetId', 'tagId'],
      type: 'primary key'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CodeSnippetTags');
  }
};