const Order = require('../db/models/order');
const OrderProduct = require('../db/models/orderproduct');
// const Product = require('../db/models/product');

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
  Order.findAll()
    .then(allOrders => {
      res.status(200).json(allOrders);
    })
    .catch(next);
});

router.get('/:orderId', (req, res, next) => {
  OrderProduct.findAll({
    where: {
      orderId: req.order.id
    }
  })
    .then(foundProducts => {
      res.status(200).json({user: req.order.userId, products: foundProducts});
    })
});

router.post('/', (req, res, next) => {
  Order.create(req.body)
    .then(createdOrder => {
      res.status(201).json(createdOrder)
    })
    .catch(next)
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

router.put('/:orderId', (req, res, next) => {

  // If product is being changed....
  if (req.body.productId) {
    OrderProduct.findOne({
      where: {
        orderId: req.order.id,
        productId: req.body.productId
      }
    })
      .then(foundProductRow => {
        // User trying to remove item from order...
        if (req.body.quantity <= 0) {
          foundProductRow.destroy()
            .then(() => {
              res.status(204).send(`Deleted product ${req.body.productId} from OrderProduct`);
            })
        }
        // Else, update quantity of product in this order...
        else {
          foundProductRow.update(req.body.quantity)
            .then(() => {
              res.status(200).send(`Updated quantity of Product ${req.body.productId} in OrderProduct`); // TODO: Need to check if nothing was updated and update was unnecessary, in which case status should be 204.
            })
        }
      })
      .catch(next);
  }
  // If admin is changing status of this order...
  else if (req.body.status !== req.order.status) {
    req.order.update(req.body, {returning: true})
      .then(result => {
        res.json(result)
      })
      .catch(next)
  }
  // Nothing was done...
  else {
    res.sendStatus(304); //this block should be unnecessary?
  }
});

router.delete('/:orderId', (req, res, next) => {
  req.order.destroy()
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
});
