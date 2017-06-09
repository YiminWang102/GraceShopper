const Promise = require('bluebird');
const db = require('./server/db');
const Product = require('./server/db/models/product');
const User = require('./server/db/models/user');
const Review = require('./server/db/models/review');
const Order = require('./server/db/models/order');
const OrderProduct = require('./server/db/models/orderproduct');


const data = {
    products: [
        {title: 'Classic Biden', description: 'Biden does what he wants', inventory: 5, price: 133700, category: 'dank,political', imageUrl: 'http://i.imgur.com/Ld3b2tJ.jpg'},
        {title: 'Power Transfer', description: 'Obama sees a bright side to the two-term limit', inventory: 5000, price: 350, category: 'dank,political', imageUrl: 'http://images.distractify.com/v0.2/featured/2016/11/bidenobama.png'},
        {title: 'me_irl', description: '', inventory: 1, price: 100000000, category: 'dank,me_irl', imageUrl: 'https://i.redd.it/ut4hrrw9tawy.png'},
        {title: 'Modern Family', description: 'the internet is good for spreading knowledge and information', inventory: 200, price: 25000, category: 'dank,spicy', imageUrl: 'https://i.redd.it/1s4gsxmn8v0z.jpg'},
        {title: 'National Security', description: 'Trump understands the importance of national security', inventory: 9001, price: 999999, category: 'dank,spicy,Trump', imageUrl: 'http://i2.kym-cdn.com/photos/images/original/001/256/620/1da.jpg'},
        {title: 'Meme6', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme7', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme8', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'},
        {title: 'Meme9', description: 'Dank', inventory: 9001, price: 1337, category: 'dank,meme,forever'}
    ],
    users: [
        {name: "Andrew", email: 'andrew@andrew.com', password: 'andrew'},
        {name: "Matt", email: 'matt@matt.com', password: 'matt'},
        {name: "David", email: 'david@david.com', password: 'david'},
        {name: "Jason", email: 'jason@jason.com', password: 'jason'},
        {name: "Eli", email: 'eli@eli.com', password: 'eli'},
        {name: "Emily", email: 'emily@emily.com', password: 'emily'},
    ],
    // reviews: [
    //     {rating: 3, text: 'Gave me too much euphoria.', userId: 1, productId: 5},
    //     {rating: 1, text: 'dont buy this product, UPS lost my package!!!1', userId: 1, productId: 2},
    //     {rating: 5, text: 'Saved my marriage.', userId: 6, productId: 3},
    //     {rating: 1, text: 'dont buy unless you want your wife to leave you', userId: 5, productId: 4},
    //     {rating: 1, text: 'not wat i expected.. i want my money back', userId: 1, productId: 2}
    // ],
    orders: [
        {shippingInfo: '555 HerokuLane, NewCentauri, NC', paymentInfo: '1234 5555 6543 2121 10/19 435', status: 1, totalPrice: 0}
    ],
    orderproducts: [
        {quantity: 2, price: 9002, orderId: 1, productId: 1}
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
    const creatingOrders = data.orders.map(function (orders) {
        return Order.create(orders);
    });
    const creatingOrderProducts = data.orderproducts.map(function (orderProducts) {
        return OrderProduct.create(orderProducts);
    });
    // const creatingReviews = data.reviews.map(function (reviews) {
    //     return Review.create(reviews);
    // })
    return Promise.all([creatingUsers, creatingProducts, creatingOrders, creatingOrderProducts/*, creatingReviews*/]);
    })
    .then(function () {
      console.log("Finished inserting data (press ctrl-c to exit)");
    })
    .catch(function (err) {
      console.error('There was totally a problem', err, err.stack);
})
