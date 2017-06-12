const expect = require('chai').expect;
const Bluebird = require('bluebird');
const db = require('../../server/db');
const Order = require('../../server/db/models/order');
const User = require('../../server/db/models/user');
const Product = require('../../server/db/models/product');
const Review = require('../../server/db/models/review')
const OrderProduct = require('../../server/db/models/orderproduct');

describe('User tests:', () => {

  before(() => {
    return db.sync({force: true})
  })

  afterEach(() => {
    return db.sync({force: true})
  })

  it('User includes name, email, and isAdmin fields', () => {
    return User.create({
      name: 'andrew',
      email: 'andrew@andrew.com',
      isAdmin: false
    })
    .then(builtUser => {
      expect(builtUser.email).to.equal('andrew@andrew.com')
      expect(builtUser.name).to.equal('andrew')
      expect(builtUser.isAdmin).to.equal(false)
    })
  })

  it('User requires name and email', () => {
    let user = User.build({
        isAdmin: false
    })
    return user.validate()
    .then(result => {
      expect(result).to.be.an.instanceOf(Error)
    })
  })

  it('User email must be unique', () => {
    let user = User.build({name: 'andrew', email: 'andrew@andrew.com'})
    let otherUser = User.build({name: 'jimbo', email: 'andrew@andrew.com'})
    User.create(user)
    .then(() => {
      return otherUser.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error)
      })
    })
  })
})

describe('Product tests:', () => {

  let product

  before(() => {
    return db.sync({force: true})
    .then(() => {
      product = Product.build({
      title: 'Classic Biden', description: 'Biden does what he wants', inventory: 5, price: 133700, category: 'dank,political', imageUrl: 'http://i.imgur.com/Ld3b2tJ.jpg'
      })
    })
  })

  afterEach(() => {
    return db.sync({force: true})
  })

  it('includes title, description, inventory, category, price and imageUrl', () => {
    return product.save()
    .then(() => {
      expect(product.title).to.equal('Classic Biden')
      expect(product.description).to.equal('Biden does what he wants')
      expect(product.inventory).to.equal(5)
      expect(product.price).to.equal(133700)
      expect(product.category).to.equal('dank,political')
      expect(product.imageUrl).to.equal('http://i.imgur.com/Ld3b2tJ.jpg')
    })
  })
})

describe('Review tests:', () => {

  let review

  before(() => {
    return db.sync({force: true})
    .then(() => {
      review = Review.build({
      rating: 3, text: 'Gave me too much euphoria.', userId: 1, productId: 5
      })
    })
  })

  afterEach(() => {
    return db.sync({force: true})
  })

  it('includes rating, text, userId and productId', () => {
    return review.validate()
    .then(() => {
      expect(review.rating).to.equal(3)
      expect(review.text).to.equal('Gave me too much euphoria.')
      expect(review.userId).to.equal(1)
      expect(review.productId).to.equal(5)
    })
  })
})

describe('Orders and orderProducts', () => {

  let order

  before(() => {
    return db.sync({force: true})
    .then(() => {
      order = Order.build({
        shippingInfo: 'A place',
        paymentInfo: 'A credit card',
        status: 1
      })
    })
  })
  afterEach(() => {
    return db.sync({force: true})
  })
  describe('Model Validations', () => {
    it('Order includes shipping, payment, status.', () => {
      return order.save()
      .then(builtOrder => {
        expect(builtOrder.shippingInfo).to.equal('A place')
        expect(builtOrder.paymentInfo).to.equal('A credit card')
        expect(builtOrder.status).to.equal(1)
      })
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
    it('OrderProducts require quantity, orderId and productId', () => {
      let orderProduct = OrderProduct.build({
        quantity: 2, price: 9002, orderId: 1, productId: 1
      })
      return orderProduct.validate()
      .then(() => {
        expect(orderProduct.quantity).to.equal(2)
        expect(orderProduct.orderId).to.equal(1)
        expect(orderProduct.productId).to.equal(1)
      })
    })
  })
})
