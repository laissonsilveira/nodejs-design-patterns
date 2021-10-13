const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup');

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California work boots", 19.99);

const group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);

console.log('boots total: ', `$${boots.total}`);
console.log('shoes total: ', `$${group_shoes.total}`);

boots.print();
sneakers.print();

group_shoes.print();
