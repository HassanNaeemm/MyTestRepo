
const request = require('supertest');
const server = require('./server');

describe('GET /', () => {

    test('should return Hello, World!', async () => {

        const response = await request(server)
            .get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, World!');

    });

});

