const PersonBuilder = require('./PersonBuilder');

// Employees
const sue = new PersonBuilder('Sue').makeEmployee().makeManger(60).build();
const bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
const phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers
const charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

const tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();
