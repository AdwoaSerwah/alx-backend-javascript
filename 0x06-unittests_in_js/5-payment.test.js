const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let spyConsoleLog;

    // Hook that runs before each test
    beforeEach(() => {
        spyConsoleLog = sinon.spy(console, 'log'); // Spy on console.log
    });

    // Hook that runs after each test
    afterEach(() => {
        spyConsoleLog.restore(); // Restore the original console.log function
    });

    it('should log the correct message when called with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20); // Call the function

        // Verify that the correct message is logged
        expect(spyConsoleLog.calledOnce).to.be.true;
        expect(spyConsoleLog.calledWith('The total is: 120')).to.be.true;
    });

    it('should log the correct message when called with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10); // Call the function

        // Verify that the correct message is logged
        expect(spyConsoleLog.calledOnce).to.be.true;
        expect(spyConsoleLog.calledWith('The total is: 20')).to.be.true;
    });
});
