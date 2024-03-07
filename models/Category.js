// Model is a fundamental frameworks that define how software developers write, structure, and execute code to build applications
// Datatypes is type of value a variable has and what type of mathematical, relational or logical operations can be applied without causing an error.
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// class name Category for the model 
class Category extends Model {}

Category.init(
  {
    id: {
      // Define the "id" column 
      // set the data tyoe to INTEGER
      type: DataTypes.INTEGER,
      // not allowing NULL
      allowNull: false,
      // Set the PRIMARY KEYS 
      primaryKey: true,
      // Increment the value for each new record 
      autoIncrement: true,
    },
    // Defining "category_name"
    category_name: {
       // Set the data type to STRING 
      type: DataTypes.STRING,
      // Doesn't allow null values
      allowNull: false,
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
//it defines the object that is created when a file is imported using require Category
module.exports = Category;
