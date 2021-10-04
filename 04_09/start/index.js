const Store = require('./Store');
const Shopper = require('./Shopper');
const Mall = require('./Mall');

const catsAndThings = new Store("Cats & Things");
const insAndOuts = new Store("Ins and Outs");

const alex = new Shopper("Alex");
const eve = new Shopper("Eve");
const sharon = new Shopper("Sharon");
const mike = new Shopper("Mike");

const valleyMall = new Mall();

catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

catsAndThings.sale(20);
insAndOuts.sale(50);

console.log(valleyMall.sales);
