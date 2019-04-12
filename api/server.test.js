const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    // beforeEach(async () => {
    //     await db('games').truncate();
    // });

    describe('GET /games', () => {
        test('should respond with 200', () => {
            return request(server)
                .get('/games')
                .expect(200);
        });

        test('should respond with json', () => {
            return request(server)
                .get('/games')
                .expect('Content-Type', /json/);
        })

        test('should return an array', () => {
            return request(server)
                .get('/games')
                .expect(200)
                .then(res => {
                    expect(res.body).toBeInstanceOf(Array);
                });
        });
    });

    describe('POST /games', () => {
        test('should respond with 200', () => {
            return request(server)
                .post('/games')
                .send({
                    title: "here is a title",
                    genre: "this is a genre",
                    releaseYear: 1000
                })
                .expect(200);
        });

        test('should respond with json', () => {
            return request(server)
                .post('/games')
                .send({
                    title: "here is a title",
                    genre: "this is a genre",
                    releaseYear: 1000
                })
                .expect('Content-Type', /json/);
        });

        test('lack of required field title should return 422', () => {
            return request(server)
                .post('/games')
                .send({
                    genre: "this is a genre",
                    releaseYear: 1000
                })
                .expect(422);
        });
    });
});