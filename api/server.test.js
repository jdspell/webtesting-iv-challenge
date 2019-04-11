const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {

    describe('GET /', () => {
        test('should respond with 200', () => {
            return request(server)
                .get('/')
                .expect(200);
        });
    });

    describe('POST /users', () => {
        test('should respond with 200', () => {
            return request(server)
                .post('/users')
                .send({ username: "user" })
                .expect(200);
        });

        test('should respond with json', () => {
            return request(server)
                .post('/users')
                .send({ username: "user" })
                .expect('Content-Type', /json/);
        });
    });

    describe('DELETE /users/:id', () => {
        test('should respond with 200', () => {
            return request(server)
                .delete('/users/:id')
                .expect(200);
        });

        test('should respond with json', () => {
            return request(server)
                .delete('/users/:id')
                .expect('Content-Type', /json/);
        });

        // test('should return 1 for successful user deletion', () => {
        //     return request(server)
        //         .delete('/users/:id')
        //         .then(res => {
        //             expect(res.body).toEqual(1);
        //         });
        // });
    });

});