const request = require('request');
const { expect } = require('chai');
let server; // Declare server variable

// Start the server before running the tests
before((done) => {
  server = require('./api'); // Import API to start the server and store the instance
  done();
});

// Stop the server after tests are completed
after((done) => {
  if (server) {
    server.close(() => { // Close the server correctly after tests
      done();
    });
  } else {
    done();
  }
});

// Test suite for the index page
describe('Index page', () => {

  it('should return correct status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Ensure status code is 200
      done();
    });
  });

  it('should return correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Ensure the body matches
      done();
    });
  });

  it('should have correct Content-Type header', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html'); // Expect text/html for HTML response
      done();
    });
  });

});
