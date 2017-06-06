const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/reviews', require('./reviews'));
router.use('/products', require('./products'));

router.use((req, res) => {
  res.status(404).send('Not found');
});
