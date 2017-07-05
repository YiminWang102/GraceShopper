const Order = require('../db/models/order');
const OrderProduct = require('../db/models/orderproduct');
const Product = require('../db/models/product');
const {createNewCartForUser} = require('../../utils');


const router = require('express').Router();

module.exports = router;

router.param('orderId', (req, res, next, id) => {
  Order.findById(id)
    .then(order => {
      if (!order) {
        const err = Error('order not found');
        err.status = 404;
        throw err;
      }
      req.order = order;
      next();
      return null;
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  Order.findAll({
    order: [['id', 'DESC']]
  })
    .then(allOrders => {
      res.status(200).json(allOrders);
    })
    .catch(next);
});

router.get('/:orderId', (req, res, next) => {
  Order.findById(req.order.id, {include: [ { model: Product, through: OrderProduct }]})
  .then(order => {
    order.getTotalPrice()
    .then((total) => {
      return order.update({totalPrice: total}, {returning: true})
    })
    .then((updatedOrder) => {
      res.json(updatedOrder)
    })
  })
  .catch(next);
});

router.get('/cart/:userId', (req, res, next) => {
  Order.findOne({
    where: {
      userId: req.params.userId,
      status: 1
    }
  })
    .then(order => {
      res.json(order)
    })
    .catch(next);
});

router.get('/user/:userId', (req, res, next) => {
  Order.findAll({
    where: {
      userId: req.params.userId,
      not: {
        status: 1
      }
    }
  })
    .then( orders => {
      res.json(orders);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Order.create(req.body)
    .then(createdOrder => {
      res.status(201).json(createdOrder);
    })
    .catch(next);
});

router.post('/:orderId', (req, res, next) => {
  let {quantity, productId} = req.body;
  let newQuantity = parseInt(quantity, 10)
  productId = parseInt(productId, 10)

  Product.findById(productId)
  .then((product) => {
    return req.order.addProduct(product, {returning: true})
  })
  .then((product) => {

    return product[0][0].update({quantity: newQuantity})
  .then(() => {
    res.status(201).send(`Product ID: ${req.body.productId} added to order ${req.order.id}`)
    })
    })
    .catch(next);

});

// User route for changing quantity of a Product in their Order or adding a Promo Code
router.put('/cart/:orderId', (req, res, next) => {

  if (req.body.isDiscounted) {
    req.order.update({totalPrice: req.body.newPrice, isDiscounted: req.body.isDiscounted}, {returning: true})
    .then((updatedOrder) => {
      res.json(updatedOrder)
    })
  }
  else {
    OrderProduct.findOne({
      where: {
        orderId: req.order.id,
        productId: req.body.productId
      }
    })
      .then(foundOrderProduct => {
        let quantityPromise = (req.body.quantity > 0) ? foundOrderProduct.update({quantity: req.body.quantity}, {returning: true}) : foundOrderProduct.destroy();
        return quantityPromise
     })
      .then(quantityPromiseResult => {
        // destroy() resolves to an integer
        if (typeof quantityPromiseResult === 'number') {
          return req.order.getTotalPrice()
            .then(result => {
              return req.order.update({totalPrice: result})
            })
            .then(() => {
              res.status(204).send(`Deleted product ${req.body.productId} from order ${req.order.id}`);
            })
        }
        else {
          return req.order.getTotalPrice()
            .then(result => {
              return req.order.update({totalPrice: result})
            })
            .then(() => {
              res.status(204).json(quantityPromiseResult)
            })
        }
      })
      .catch(next);
  }
});

// Admin route for updating status of Order
router.put('/update/:orderId', (req, res, next) => {
  // ex: req.body => {status: 1}
  let newCart = false;
  let databaseOrder;
  if(req.order.status === 1) newCart = true;
  req.order.update(req.body, {returning: true})
    .then(order => {
      databaseOrder = order;
      if(newCart) return createNewCartForUser(order.userId);
      else return;
    })
    .then( () => {
      res.json(databaseOrder);
    })
    .catch(next);
});

router.delete('/:orderId', (req, res, next) => {
  req.order.destroy()
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});
