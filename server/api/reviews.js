const router = require('express').Router();
const Review = require('../db').model('review');
module.exports = router;

router.param('reviewId', (req, res, next, id) => {
  Review.findById(id)
    .then(review => {
      if (!review) {
        const err = Error('Review not found');
        err.status = 404;
        throw err;
      }
      req.review = review;
      next();
      return null;
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  Review.findAll()
    .then(reviews => res.json(reviews))
    .catch(next);
});

router.get('/:reviewId', (req, res, next) => {
  res.json(req.review);
});

router.get('/products/:productId', (req, res, next) => {
  Review.findAll({
    where: {
      productId: req.params.productId
    }
  })
    .then(reviews => res.status(200).json(reviews))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Review.create(req.body)
    .then( review => {
      res.status(201).json(review);
    })
    .catch(next);
});

// TODO: make sure only admins can hit this route
//TODO maybe reviews can hit this route to change their password (we'll see)
router.put('/:reviewId', (req, res, next) => {
  req.review.update(req.body)
    .then( affectedArr => {
      if (!affectedArr[0]) res.sendStatus(204);
      else res.sendStatus(200);
    })
    .catch(next);
});

//TODO make sure only admins can hit this route
router.delete('/:reviewId', (req, res, next) => {
  req.review.destroy()
    .then( () => {
      res.sendStatus(204);
    })
    .catch(next);
});
