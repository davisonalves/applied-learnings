const { products, users } = require('./fakedb.json')

class FakeDb {
  constructor() {
    this.products = products;
    this.users = users;
  }
}

module.exports = FakeDb;