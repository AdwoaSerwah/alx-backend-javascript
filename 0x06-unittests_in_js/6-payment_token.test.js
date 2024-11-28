const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return successful response when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then(response => {
                // Verify that the response is as expected
                expect(response).to.have.property('data').that.equals('Successful response from the API');
                done(); // Call done() to signal the test is complete
            })
            .catch(done); // If there is an error, Mocha will handle it
    });

    it('should do nothing when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then(response => {
                // Verify that no response is returned (no data)
                expect(response).to.be.undefined;
                done(); // Call done() to signal the test is complete
            })
            .catch(done); // Handle any errors by passing them to done
    });
});
