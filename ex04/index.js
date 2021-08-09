const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // ##BEGIN##
  User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.STRING
  });

  Product = sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
  Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
  });
  User.hasMany(Product);
  await sequelize.sync(true)
  // ##END##
  return { User, Product }
} 
