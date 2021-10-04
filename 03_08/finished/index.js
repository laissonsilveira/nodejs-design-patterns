const Shopper = require('./Shopper');
const {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem');

const alex = new Shopper('Alex', 4000);

const walkman = new InventoryItem("Walkman", 29.99);
const necklace = new InventoryItem("Necklace", 9.99);

const gold_necklace = new GoldenInventoryItem(necklace);
const diamond_gold_necklace = new DiamondInventoryItem(gold_necklace);

const diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(diamond_gold_necklace);
alex.purchase(diamond_walkman);

alex.printStatus();

diamond_walkman.print();
