const express = require('express');
const app = express();

const FakeDb = require('./fakedb/fakedb.js');
const db = new FakeDb;

app.use(express.json())
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.route('/products/:id?')
  .get((req, res) => {
    if(req.params.id) {
      const productId = +req.params.id;
      const product = db.products.find(p => p.id === productId);
      return product ? res.json(product) : res.status(404).json({message: 'Product not found'});
    } else {
      res.json(db.products);
    }
  })
  .post((req, res) => {
    const newProduct = { id: db.products.length + 1 , name: req.body.name, description: req.body.description, price: req.body.price}
    db.products = [...db.products, newProduct]
    res.status(201).json(newProduct);
  })



app.route('/users')
  .get((req, res) => {
    res.json(db.users)
})

module.exports = app;