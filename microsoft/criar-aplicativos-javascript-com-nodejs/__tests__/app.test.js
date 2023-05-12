const request = require('supertest')
const app = require('../src/app')

describe('PATH: /', () => {
  test('METHOD: GET', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('PATH: /products', () => {
  test('METHOD: GET all products', async () => {
    const response = await request(app).get('/products');
    expect(response.statusCode).toBe(200);
    expect(response.body[0].name).toBe('Product 1');
    }
  );

  test('METHOD: GET one product', async () => {
    const response = await request(app).get('/products/2');
    expect(response.statusCode).toBe(200);
    expect(response.body.description).toBe('This is the description for product 2.')
  });

  test('METHOD: GET product not found', async () => {
    const response = await request(app).get('/products/1000');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Product not found')
  });

  test('METHOD: POST add product', async () => {
    const newProduct = { name: 'Random Product', description: 'Created by automation test', price: 10.50}
    const response = await request(app).post('/products').send(newProduct);

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Random Product');
  });
});

describe('PATH: /users', () => {
  test.each([
    [1, 'John Doe'], 
    [2, 'Jane Smith'],
    [3, 'Bob Johnson'],
  ])
  ('METHOD: GET userId(%d) contains userName(%s)', async (userId, userName) => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body[userId - 1].name).toBe(userName);
    }
  );
});