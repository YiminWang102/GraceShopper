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
  .get('/me', (req, res, next) => {
    if(req.user) res.json(req.user);
    else{
      const rand = Math.random().toString();
      const user = {
        name: rand,
        email: rand + '@yo.com',
        isGuest: true,
        pw: rand
      };
      User.create(user)
        .then(createdUser => {
          return createNewCartForUser(createdUser.id);
        })
        .then(updatedUser => {
          req.login(updatedUser, err => err ? next(err) : res.json(updatedUser));
         })
        .catch(next);
    }
  })
  .use('/google', require('./google'));
