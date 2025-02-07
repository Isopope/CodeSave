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
      // define association here
    }
  }
  CodeSnippet.init({
    title: DataTypes.STRING,
    code: DataTypes.TEXT,
    description: DataTypes.TEXT,
    visibility: DataTypes.ENUM,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CodeSnippet',
  });
  return CodeSnippet;
};