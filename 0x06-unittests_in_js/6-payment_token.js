function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            resolve(); // Resolve with undefined when success is false
        }
    });
}

module.exports = getPaymentTokenFromAPI;
