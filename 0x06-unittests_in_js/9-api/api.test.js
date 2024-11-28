const request = require('request');
const { expect } = require('chai');

// Existing test suite for the Index page
describe('Index page', () => {
  it('should return correct status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);  // Assert that status code is 200
      done();  // Call done to indicate the test is complete
    });
  });

  it('should return correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');  // Assert response body
      done();
    });
  });

  it('should have correct Content-Type header', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');  // Assert correct header
      done();
    });
  });
});

// New test suite for the Cart page
describe('Cart page', () => {
  // Test when :id is a number
  it('should return correct status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);  // Assert status code is 200
      expect(body).to.equal('Payment methods for cart 123');  // Assert correct response body
      done();
    });
  });

  // Test when :id is NOT a number (e.g., string or special chars)
  it('should return 404 status code when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);  // Assert 404 status code
      expect(body).to.equal('Cannot GET /cart/hello');  // Assert correct error message
      done();
    });
  });

  // Additional "etc." test: Testing with an empty :id (empty string)
  it('should return 404 status code when :id is an empty string', (done) => {
    request('http://localhost:7865/cart/', (error, response, body) => {
      expect(response.statusCode).to.equal(404);  // Assert 404 status code
      expect(body).to.include('Cannot GET /cart/');  // Assert correct error message
      done();
    });
  });
});
