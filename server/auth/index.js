const router = require('express').Router();
const User = require('../db/models/user');
const Order = require('../db/models/order');

module.exports = router
  .post('/login', (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (!user)
          res.status(401).send('User not found');
        else if (!user.correctPassword(req.body.password))
          res.status(401).send('Incorrect password');
        else {
          if (!user.cartId) {
            Order.create({ userId: user.id })
              .then(order => {
                return user.update({
                  cartId: order.id
                }, {returning: true})
              })
              .then(user => {
                req.login(user, err => err ? next(err) : res.json(user));
              })
          }
          else {
            req.login(user, err => err ? next(err) : res.json(user));
          }
        //   Order.findOne({
        //     where: {
        //       userId: user.id,
        //       status: 1
        //     }
        //   })
        //     .then(order => {
        //       if (!order) {
        //         return Order.create({userId: user.id})
        //       }
        //       else {
        //         return order;
        //       }
        //     })
        //     .then(order => {

        //       req.login(user, err => err ? next(err) : res.json(user));
        //     })
        //     .catch(next);
        // }
      }})
      .catch(next);
  })
  .post('/signup', (req, res, next) => {
    User.create(req.body)
      .then(user =>
        req.login(user, err => err ? next(err) : res.json(user))
      )
      .catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError')
          res.status(401).send('User already exists');
        else next(err);
      });
  })
  .post('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })
  .get('/me', (req, res) => {
    res.json(req.user);
  })
  .use('/google', require('./google'));
