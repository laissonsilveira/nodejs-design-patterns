const CatalogItem = require('./CatalogItem');

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California work boots", 19.99);

console.log('boots total: ', `$${boots.total}`);

boots.print();
sneakers.print();
