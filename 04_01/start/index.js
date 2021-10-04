const Store = require('./Store');
const inventory = require('./inventory');

const skiShop = new Store('Steep and Deep', inventory.floor);

const searchItem = 'ski hats';
const results = skiShop.find(searchItem);

console.log(results);
