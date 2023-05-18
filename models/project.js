'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.TEXT,
    video: DataTypes.STRING,
    tools: DataTypes.STRING,
    gitHub: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};