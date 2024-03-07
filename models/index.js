// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships between models
// belongs to a relationship where the depending rows in the foreign key table actually cannot exist without the row in the primary key table. 
// A Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // The foreign key in the Product model
});
// The BelongsToMany association is used to create a Many-To-Many relationship between two models
// A Product belongs to many Tags through the ProductTag model
Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediate model
  foreignKey: 'product_id', // The foreign key in the Product model
});
// A Tag belongs to many Products through the ProductTag model
Tag.belongsToMany(Product, {
  through: ProductTag, // The intermediate model
  foreignKey: 'tag_id', // The foreign key in the Tag model
});
// hasmany denotes a one-to-many connection of a model to another model through referential integrity
// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // The foreign key in the Product model
});

// Export models of each product 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};