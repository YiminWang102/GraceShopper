const {createNewCartForUser} = require('../../utils');
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
            createNewCartForUser(user.id)
              .then(user => {
                req.login(user, err => err ? next(err) : res.json(user));
              });
          }
          else {
            req.login(user, err => err ? next(err) : res.json(user));
          }
      }})
      .catch(next);
  })
  .post('/signup', (req, res, next) => {
    User.create(req.body)
      .then(user => {

        createNewCartForUser(user.id)
          .then(user => {
            req.login(user, err => err ? next(err) : res.json(user));
          });

        // Order.create({userId: user.id})
        //   .then(order => {
        //     return user.update({
        //       cartId: order.id
        //     }, {returning: true});
        //   })
        //   .then(user => {
        //     req.login(user, err => err ? next(err) : res.json(user));
        //   });
      })
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
