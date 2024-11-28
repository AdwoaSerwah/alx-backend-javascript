const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber and return 10, and log correct message', () => {
        // Create a stub for the calculateNumber function that always returns 10
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log to check if the correct message is logged
        const spyConsoleLog = sinon.spy(console, 'log');

        // Call the function with 100 and 20 as arguments
        sendPaymentRequestToApi(100, 20);

        // Verify the stub was called with the expected arguments
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;

        // Verify the console.log spy was called with the correct message
        expect(spyConsoleLog.calledOnce).to.be.true;
        expect(spyConsoleLog.calledWith('The total is: 10')).to.be.true;

        // Restore the stub and spy after the test
        stub.restore();
        spyConsoleLog.restore();
    });
});
