const Shopper = require('./Shopper');
const Employee = require('./Employee');

const alex = new Shopper('Alex Banks', 100);
const eve = new Employee('Eve Porcello', 100, 'This and That');

console.log(alex.toString())
console.log(eve.toString())
