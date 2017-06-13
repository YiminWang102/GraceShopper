const Order = require('../db/models/order');
const OrderProduct = require('../db/models/orderproduct');
const Product = require('../db/models/product');
const {createNewCartForUser} = require('../../utils');


const router = require('express').Router();

module.exports = router;

router.param('orderId', (req, res, next, id) => {
  Order.findById(id, {
    include: [Product]
  })
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
  Order.findAll()
    .then(allOrders => {
      res.status(200).json(allOrders);
    })
    .catch(next);
});

router.get('/:orderId', (req, res, next) => {
  Order.findById(req.order.id, {include: [ { model: Product, through: OrderProduct }]})
  .then(order => {
    return order.getTotalPrice()
    .then(result => {
      return order.update({totalPrice: result})
    })
    .then(() => {
      res.json(order);
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
  const {quantity, productId} = req.body;
  OrderProduct.create({
    quantity,
    productId,
    orderId: req.order.id
  })
    .then(() => {
      res.status(201).send(`Product ID: ${req.body.productId} added to order ${req.order.id}`)
    })
    .catch(next);
});

// User route for changing quantity of a Product in their Order
router.put('/cart/:orderId', (req, res, next) => {
  OrderProduct.findOne({
    where: {
      orderId: req.order.id,
      productId: req.body.productId
    }
  })
    .then(foundOrderProduct => {
      console.log('------------------------------------' + req.body.quantity + '----------------' + req.order.id)
      // If quantity is 0, user is effectively removing product from their order
      let quantityPromise = (req.body.quantity > 0) ? foundOrderProduct.update({quantity: req.body.quantity}, {returning: true}) : foundOrderProduct.destroy();
      return quantityPromise
   })
    .then(quantityPromiseResult => {
      console.log(quantityPromiseResult)
      // destroy() resolves to an integer
      if (typeof quantityPromiseResult === 'number') {
          res.status(204).send(`Deleted product ${req.body.productId} from order ${req.order.id}`);
      }
      else {
          res.status(204).json(quantityPromiseResult)
      }
    })
    .catch(next);
});

// Admin route for updating status of Order
router.put('/update/:orderId', (req, res, next) => {
  // ex: req.body => {status: 1}
  let newCart = false;
  if(req.order.status === 1) newCart = true;
  req.order.update(req.body, {returning: true})
    .then(order => {
      if(newCart) {
        createNewCartForUser(order.userId)
          .then( () => {res.status(200).json(order)})}
      else res.status(200).json(order);
    })
    .catch(next);
});

router.delete('/:orderId', (req, res, next) => {
  req.order.destroy()
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
});
