const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');
const OrderProduct = require('./orderproduct');

Review.belongsTo(User); // Will add a userId attribute to Review to hold the primary key value for User
Review.belongsTo(Product);// Will add a productId attribute to Review to hold the primary key value for Product

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, {through: OrderProduct}); //watch out for the cascade
Product.belongsToMany(Order, {through: OrderProduct, onDelete: 'cascade', hooks: true});
