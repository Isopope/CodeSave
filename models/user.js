'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Project, { foreignKey: 'userId', as: 'projects' });
      this.hasMany(models.CodeSnippet, { foreignKey: 'userId', as: 'userCodeSnippets' });
      this.hasMany(models.Comment, { foreignKey: 'userId', as: 'userComments' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};