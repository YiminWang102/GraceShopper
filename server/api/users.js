const router = require('express').Router();
const User = require('../db').model('user');
const Order = require('./orders');
const {createNewCartForUser} = require('../../utils');
module.exports = router;

router.param('userId', (req, res, next, id) => {
  User.findById(id)
    .then(user => {
      if (!user) {
        const err = Error('User not found');
        err.status = 404;
        throw err;
      }
      req.user = user;
      next();
      return null;
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:userId', (req, res, next) => {
  res.json(req.user);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then( user => {
      res.status(201).json(user);
    })
    .catch(next);
});

router.put('/:userId', (req, res, next) => {
  req.user.update(req.body)
    .then( affectedArr => {
      if (!affectedArr[0]) res.sendStatus(204);
      else res.sendStatus(200);
    })
    .catch(next);
});

router.delete('/:userId', (req, res, next) => {
  req.user.destroy()
    .then( () => {
      res.sendStatus(204);
    })
    .catch(next);
});

router.put('/cart/:userId', (req,res,next) => {
  createNewCartForUser(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
});
