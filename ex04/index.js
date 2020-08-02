const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  const User = sequelize.define("User", { name: Sequelize.STRING });
  const Product = sequelize.define("Product", { title: Sequelize.STRING });
  User.belongsTo(Product); 
  Product.hasMany(User);
	await sequelize.sync({ force: true });
  return { User, Product }
} 
