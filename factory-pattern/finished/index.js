const userFactory = require('./userFactory');

const alex = userFactory('Alex Banks', 100);
const eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');

eve.payDay(100);

console.log(alex.toString());
console.log(eve.toString());
