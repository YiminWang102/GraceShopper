const { expect } = require('chai');
const db = require('../db');
const Product = db.model('product');

describe('Product model', () => {

  beforeEach(() => {
    return db.sync({ force: true });
  });

  let dankMeme;

  beforeEach(() => {
    return Product.create({
      title: 'UltraDank Meme',
      description: 'We on an ultradank meme...',
      inventory: 1,
      price: 7,
      category: 'good, stuff, here',
      rating: 1
    })
    .then(product => {
      dankMeme = product;
    });
  });

  it('has a default imageUrl', () => {
    expect(dankMeme.imageUrl).to.equal('https://i.redd.it/uh4wjeypg46y.jpg');
  });

}); // end describe('Product model')
