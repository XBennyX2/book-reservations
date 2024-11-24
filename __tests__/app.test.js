const request = require('supertest');
const app = require('../app'); // Adjust the path to your app.js file


describe('GET /', () => {
    it('should respond with a status code 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});