class Store {

    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;
    }

    find(itemName) {
        const index = this.inventory.map(item => item.name).indexOf(itemName);
        return this.inventory[index];
    }

}

module.exports = Store;
