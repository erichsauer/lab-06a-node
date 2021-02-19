const { app } = require('../app.js');
const { plants } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

it('should return all plants',
    async (done) => {
        const expectation = {
            results: plants
        };

        const response = await request.get('/plants');

        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();
    });

it('should return all plants',
    async (done) => {
        const plant = {
            id: 1,
            name: 'Crested Fluffel',
            image: 'crested-fluffel.jpg',
            description: 'Very rare fruiting body with feather-like pollination whisps.',
            fragrant: true,
            safetyNotes: 'Sniff in moderation.',
            price: 10
        };
        
        const expectation = {
            results: plant 
        };

        const response = await request.get('/plants/1');

        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();
    });