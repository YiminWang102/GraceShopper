const expect = require('chai').expect;
const Bluebird = require('bluebird');
const db = require('../../server/db');
const Order = require('../../server/orders');
const User = require('../../server/users');
const Product = require('../../server/products');
const OrderProduct = require('../../server/orderproduct');

describe('Model tests', () => {

  before(() => {
    return db.sync({force: true})
  })

  afterEach(() => {
    return db.sync({force: true})
  })

  describe('Validations', () => {

    it('User includes email, password and isAdmin fields', () => {
      return User.build({email: 'andrew@andrew.com',
        password: 'andrewspass',
        isAdmin: false
      })
      .then(builtUser => {
        expect(builtUser.email).to.equal('andrew@andrew.com')
        expect(builtUser.password).to.equal('andrewspass')
        expect(builtUser.isAdmin).to.equal(false)
      })
    })

    it('User requires email', () => {
      return User.build({
        password: 'andrewspass',
        isAdmin: false
      })
      .then(result => {
        expect(result).to.be.an.instanceOf(Error)
      })
    })
    it('User email must be unique', () => {
      return Bluebird.all([User.create({email: 'andrew@andrew.com'}),
        User.create({email: 'andrew@andrew.com'})])
      .then(result => {
        expect(result).to.be.an.instanceOf(Error)
      })
    })
  })
})

describe('Orders and orderProducts', () => {
  let order
  let product
  let user
  before(() => {
    return db.sync({force: true})
  })
  beforeEach(() => {
    order = Order.build({
      shippingInfo: 'A place',
      paymentInfo: 'A credit card',
      status: 1
    })
    product = Product.build({
    title: 'Classic Biden', description: 'Biden does what he wants', inventory: 5, price: 133700, category: 'dank,political', imageUrl: 'http://i.imgur.com/Ld3b2tJ.jpg'
    })
    user = user.build({
      name: "Andrew", email: 'andrew@andrew.com', password: 'andrew'
    })
  })
  afterEach(() => {
    return db.sync({force: true})
  })
  describe('Model Validations', () => {
    it('Order includes shipping, payment, status.', () => {
      return order.save()
      })
      .then(builtOrder => {
        expect(builtOrder.shippingInfo).to.equal('A place')
        expect(builtOrder.paymentInfo).to.equal('A credit card')
        expect(status).to.equal(1)
      })
    it('Order requires shippingInfo', () => {
      order.shippingInfo = null
      return order.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error)
      })
    })
    it('Order requires paymentInfo', () => {
      order.paymentInfo = null
      return order.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error)
      })
    })
    it('Order requires status', () => {
      order.status = null
      return order.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error)
      })
    })
    it('OrderProducts require quantity, userId, and productId', () => {
      return Bluebird.all([order.create(),
      product.create(),
      user.create(),
      OrderProduct.build({
        quantity: 2, price: 9002, orderId: 1, productId: 1
      })])
      .then(result => {
        expect(result[3].quantity).to.equal(2)
        expect(result[3].userId).to.equal(1)
        expect(result[3].productId).to.equal(1)
      })
    })
  })
})
