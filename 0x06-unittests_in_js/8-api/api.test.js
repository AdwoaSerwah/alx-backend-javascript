// api.test.js
const request = require('request');
const { expect } = require('chai');

// Start the server before running the tests
before((done) => {
  require('./api'); // Import the API to start the server
  done();
});

// Test suite for the index page
describe('Index page', () => {
  it('should return correct status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
