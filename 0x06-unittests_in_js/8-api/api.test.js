const request = require('request');
const { expect } = require('chai');

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
