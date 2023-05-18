'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Blog.hasMany(models.Comment, {
        foreignKey:'blogID',
      })
    }
  }
  Blog.init({
    date: DataTypes.DATE,
    entry: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};