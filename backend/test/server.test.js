const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('Test the /api/data path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Data from the API' });
  });
});