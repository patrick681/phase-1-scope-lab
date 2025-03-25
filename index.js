// Write your solution in this file!
// 1. Declare a global variable customerName using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to set a global variable bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'some customer';

// 6. Function to attempt changing the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another customer'; // This will cause an error
}
