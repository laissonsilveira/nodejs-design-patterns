const Person = require('./Person');

// Employees
const sue = new Person('Sue', true, true, 60);
const bill = new Person('Bill', true, false, 20);
const phil = new Person('Phil', true, false);

// Shoppers
const charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
const tabbitha = new Person('Tabbitha', false, false, 0, 1000);
