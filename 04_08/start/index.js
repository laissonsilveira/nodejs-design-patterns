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
