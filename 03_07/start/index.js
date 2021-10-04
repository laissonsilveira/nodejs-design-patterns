const Shopper = require('./Shopper');
const InventoryItem = require('./InventoryItem');

const alex = new Shopper('Alex', 100);

const walkman = new InventoryItem("Walkman", 29.99);
const necklace = new InventoryItem("Necklace", 9.99);

alex.purchase(necklace);
alex.purchase(walkman);

alex.printStatus();
