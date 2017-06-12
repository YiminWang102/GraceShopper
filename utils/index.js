const Order = require('../server/db/models/order');
const User = require('../server/db/models/user');

const createNewCartForUser = userId => {
  return User.findById(userId)
    .then(user => {
      return Order.create({
        userId: user.id
      })
        .then( order => {
          return user.update({
            cartId: order.id
          }, {returning: true});
        });
    });
};

module.exports = {
  createNewCartForUser
};
