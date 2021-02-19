const { app } = require('../app.js');
const { plants } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

it('should return all plants',
    async (done) => {
        const expectation = {
            results: plants
        };

        const response = await request.get('/pokemon');

        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();
    });