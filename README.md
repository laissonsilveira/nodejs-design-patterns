# nodejs-design-patterns

Design patterns encourage programming efficiency and code reuse.

## Anti-patterns

* Modifying the prototype on an instance
```js
person.__proto__.address = {}
```
* Syncing execution after initialization
```js
listen() {
    fs.readFileSync(...)
}
```
* Callback hell
```js
readFile(..., () => {
    parseDate(..., () => {
        writeFile(..., () => {
            logResponse(..., () => {}
        }
    }
}
```

## Design patterns

Reusable solution to a commonly occurring problem within a given context in software design.

### Creational Patterns

* Singleton pattern

    > "Ensure a class only has one instance, and provide a global point of access to it."

    Ex:
    * Created Singleton class to Logger -> [Normal Pattern](singleton-pattern)
    * Removed Singleton class to Logger because NodeJS `require` always put in the cache and use the same instance -> [NodeJS Pattern](singleton-nodejs-pattern)

* Prototype pattern

    > "Specify the kinds of objects to create using prototypical instance, and create new objects by copying this prototype."

    Ex: Created scout_prototype -> [Pattern](prototype-pattern)

* Factory pattern

    > "Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses."

    Ex: Created userFactory -> [Pattern](factory-pattern)

* Builder pattern

    > "Separate the construction of a complex object from its representation so that the same construction process can create different representations. Used to resolve anti-pattern named a telescoping constructor (many params on the constructor)"

    Ex: Created PersonBuilder -> [Pattern](builder-pattern)

### Structural Patterns

* Adapter pattern

    > "Convert the interface of a class into anoter clients expect. Adapter lets classes work together that could't otherwise because of incompatible interfaces."

    Ex: Created localStorare to work with Browser and NodeJS server -> [Pattern](adapter-pattern)

* Proxy pattern

    > "Provide a surrogate or placeholder for another object to control access to it."

    Ex: Created FS_Proxy to control `fs module` -> [Pattern](proxy-pattern)

* Composite pattern

    > "Compose objects into tree structure to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly."

    Ex: Created CatalogGroup with the same interface -> [Pattern](composite-pattern)

* Decorator pattern

    > "Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality."

    Ex: Created Golden and Diamond Inventory -> [Pattern](decorator-pattern)

### Behavioral Pattherns

* Command pattern

    > ""

    Ex: [Pattern]()

* Observer pattern

    > ""

    Ex: [Pattern]()

* Strategy pattern

    > ""

    Ex: [Pattern]()
