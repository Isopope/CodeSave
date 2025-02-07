'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CodeSnippet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      this.belongsTo(models.Project, { foreignKey: 'projectId', as: 'project' });
      this.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
      this.belongsToMany(models.Tag, { through: 'CodeSnippetTags', foreignKey: 'codeSnippetId', as: 'tags' });
      this.hasMany(models.Comment, { foreignKey: 'codeSnippetId', as: 'codeSnippetComments' });
    }
  }
  CodeSnippet.init({
    title: DataTypes.STRING,
    code: DataTypes.TEXT,
    description: DataTypes.TEXT,
    visibility: {
      type: DataTypes.ENUM('public', 'private', 'shared'),
      allowNull: false,
      defaultValue: 'private'
    },
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CodeSnippet',
  });
  return CodeSnippet;
};