const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      // type of data
      type: DataTypes.INTEGER,
      // NOT NULL
      autoNull: false,
      // instruct this is primary key
      primaryKey: true,
      // auto increment on
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      autoNull: false,
      validate: {
        isProdName: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
