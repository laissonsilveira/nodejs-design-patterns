const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup');

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California work boots", 19.99);

const group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);

const group_food = new CatalogGroup("Food for while you try on clothes", [
    new CatalogItem("Milkshake", 5.99),
    new CatalogItem("French Fries", 3.99)
]);

const keychain = new CatalogItem("Key Chain", .99);

const catalog = new CatalogGroup("Clothes and Food", [keychain, group_shoes, group_food]);

console.log(`$${catalog.total}`);

catalog.print();
