const Promise = require('bluebird');
const db = require('./server/db');
const Product = require('./server/db/models/product');
const User = require('./server/db/models/user');
ONCEBABAB
const data = {
    products: [
        {title: 'Meme1', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme2', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme3', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme4', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme5', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme6', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme7', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme8', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme9', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'}
    ],
    users: [
        {name: "Andrew", email: 'andrew@andrew.com'},
        {name: "Matt", email: 'matt@matt.com'},
        {name: "David", email: 'david@david.com'},
        {name: "Jason", email: 'jason@jason.com'},
        {name: "Eli", email: 'eli@eli.com'},
        {name: "Emily", email: 'emily@emily.com'},
    ]
};

db.sync({force: true})
.then(function () {
    console.log("Dropped old data, now inserting data");
    const creatingUsers = data.users.map(function (users) {
        return User.create(users);
    });
    const creatingProducts = data.products.map(function (products) {
        return Product.create(products);
    });
    return Promise.all([creatingUsers, creatingProducts]);
    })
    .then(function () {
      console.log("Finished inserting data (press ctrl-c to exit)");
    })
    .catch(function (err) {
      console.error('There was totally a problem', err, err.stack);
})