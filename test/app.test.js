const request = require('supertest');
const app = require('../app');

test('GET /add/1/2 should return 3', async () => {
    const response = await request(app).get('/add/1/2');
    expect(response.body.result).toBe(3);
});

test('GET /add/-1/-2 should return -3', async () => {
    const response = await request(app).get('/add/-1/-2');
    expect(response.body.result).toBe(-3);
});

test('GET /substract/5/3 should return 2', async () => {
    const response = await request(app).get('/substract/5/3');
    expect(response.body.result).toBe(2);
});

test('GET /substract/2/5 should return -3', async () => {
    const response = await request(app).get('/substract/2/5');
    expect(response.body.result).toBe(-3);
});

test('GET /multiply/3/4 should return 12', async () => {
    const response = await request(app).get('/multiply/3/4');
    expect(response.body.result).toBe(12);
});

test('GET /multiply/5/0 should return 0', async () => {
    const response = await request(app).get('/multiply/5/0');
    expect(response.body.result).toBe(0);
});

test('GET /devide/10/2 should return 5', async () => {
    const response = await request(app).get('/devide/10/2');
    expect(response.body.result).toBe(5);
});

test('GET /devide/5/0 should return 400 error', async () => {
    const response = await request(app).get('/devide/5/0');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Cannot divide by zero');
});
