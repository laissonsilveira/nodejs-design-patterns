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

    ![Singleton pattern](singleton-pattern/singleton-pattern.png)

    All Singleton implementations have these two steps in common:

    * Make the default constructor private, to prevent other objects from using the new operator with the singleton class.
    * Create a static creation method that acts as a constructor. This method calls the private constructor under the hood to create an object and saves it to a static field. All subsequent calls to this method return the cached object.

    If your code has access to the singleton class, then it will be able to call the singleton's static method. So whenever that method is called, the same object is returned.

    Applicability:

    * Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.
    * Use the Singleton pattern when you need stricter control over global variables.

    Ex:
    * Created Singleton class to Logger -> [Normal Pattern](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/singleton-pattern)
    * Removed Singleton class to Logger because NodeJS `require` always put in the cache and use the same instance -> [NodeJS Pattern](singleton-nodejs-pattern)

* Prototype pattern

    > "Specify the kinds of objects to create using prototypical instance, and create new objects by copying this prototype."

    ![Prototype pattern](prototype-pattern/prototype-pattern.png)

    The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single `clone` method.

    Applicability:

    * Use the Prototype pattern when your code shouldn’t depend on the concrete classes of objects that you need to copy.
    * Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects. Somebody could have created these subclasses to be able to create objects with a specific configuration.

    Ex: Created scout_prototype -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/prototype-pattern)

* Factory pattern

    > "Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses."

    ![Factory pattern](factory-pattern/factory-pattern.png)

    The Factory Method pattern suggests that you replace direct object construction calls (using the `new` operator) with calls to a special factory method.

    Applicability:

    * Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.
    * Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.
    * Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.

    Ex: Created userFactory -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/factory-pattern)

* Builder pattern

    > "Separate the construction of a complex object from its representation so that the same construction process can create different representations. Used to resolve anti-pattern named a telescoping constructor (many params on the constructor)"

    ![Builder pattern](builder-pattern/builder-pattern.png)

    The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called `builders`.

    Applicability:

    * Use the Builder pattern to get rid of a “telescopic constructor”.
    * Use the Builder pattern when you want your code to be able to create different representations of some product (for example, stone and wooden houses).
    * Use the Builder to construct Composite trees or other complex objects.

    Ex: Created PersonBuilder -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/builder-pattern)

### Structural Patterns

* Adapter pattern

    > "Convert the interface of a class into anoter clients expect. Adapter lets classes work together that could't otherwise because of incompatible interfaces."

    ![Adapter pattern](adapter-pattern/adapter-pattern.png)

    You can create an adapter. This is a special object that converts the interface of one object so that another object can understand it.

    An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.

    Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate. Here’s how it works:

    1. The adapter gets an interface, compatible with one of the existing objects.
    2. Using this interface, the existing object can safely call the adapter’s methods.
    3. Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.

    Sometimes it’s even possible to create a two-way adapter that can convert the calls in both directions.

    Applicability:

    * Use the Adapter class when you want to use some existing class, but its interface isn’t compatible with the rest of your code.

    * Use the pattern when you want to reuse several existing subclasses that lack some common functionality that can’t be added to the superclass.

    Ex: Created localStorare to work with Browser and NodeJS server -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/adapter-pattern)

* Proxy pattern

    > "Provide a surrogate or placeholder for another object to control access to it."

    ![Proxy pattern](proxy-pattern/proxy-pattern.png)

    The Proxy pattern suggests that you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.

    Applicability:

    * Lazy initialization (virtual proxy). This is when you have a heavyweight service object that wastes system resources by being always up, even though you only need it from time to time.

    * Access control (protection proxy). This is when you want only specific clients to be able to use the service object; for instance, when your objects are crucial parts of an operating system and clients are various launched applications (including malicious ones).

    * Local execution of a remote service (remote proxy). This is when the service object is located on a remote server.

    * Logging requests (logging proxy). This is when you want to keep a history of requests to the service object.

    * Caching request results (caching proxy). This is when you need to cache results of client requests and manage the life cycle of this cache, especially if results are quite large.

    * Smart reference. This is when you need to be able to dismiss a heavyweight object once there are no clients that use it.

    Ex: Created FS_Proxy to control `fs module` -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/proxy-pattern)

* Composite pattern

    > "Compose objects into tree structure to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly."

    ![Composite pattern](composite-pattern/composite-pattern.png)

    The greatest benefit of this approach is that you don’t need to care about the concrete classes of objects that compose the tree. You don’t need to know whether an object is a simple product or a sophisticated box. You can treat them all the same via the common interface. When you call a method, the objects themselves pass the request down the tree.

    Applicability:

    *  Use the Composite pattern when you have to implement a tree-like object structure.

    * Use the pattern when you want the client code to treat both simple and complex elements uniformly.

    Ex: Created CatalogGroup with the same interface -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/composite-pattern)

* Decorator pattern

    **Also known as: `Wrapper`**

    > "Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality."

    ![Decorator pattern](decorator-pattern/decorator-pattern.png)

    Extending a class is the first thing that comes to mind when you need to alter an object’s behavior. However, inheritance has several serious caveats that you need to be aware of.

      - Inheritance is static. You can’t alter the behavior of an existing object at runtime. You can only replace the whole object with another one that’s created from a different subclass.
      - Subclasses can have just one parent class. In most languages, inheritance doesn’t let a class inherit behaviors of multiple classes at the same time.

    Applicability:

    * Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.

    * Use the pattern when it’s awkward or not possible to extend an object’s behavior using inheritance.

    Ex: Created Golden and Diamond Inventory -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/decorator-pattern)

### Behavioral Pattherns

* Chain of responsability

    > "Avoid coupling the sender of a request to its receiver by giving more than one object a change to handle the request. Chain the receiving objects and pass the request along the chain."

    ![Chain of responsability](chain-of-reponsibility-pattern/chain-of-responsibility.png)

    Like many other behavioral design patterns, the Chain of Responsibility relies on transforming particular behaviors into stand-alone objects called handlers. The pattern suggests that you link these handlers into a chain. Each linked handler has a field for storing a reference to the next handler in the chain. In addition to processing a request, handlers pass the request further along the chain. The request travels along the chain until all handlers have had a chance to process it.

    Applicability:

    * Use the Chain of Responsibility pattern when your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.

    * Use the pattern when it’s essential to execute several handlers in a particular order.

    * Use the CoR pattern when the set of handlers and their order are supposed to change at runtime.

    Ex: Created `Storage` to search in all Stores -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/chain-of-reponsibility-pattern)

* Command pattern

    > " Encapsulate a request as an object, thereby letting you parameterize with different requests, queue or log request, and support undoable operations."

    ![Command pattern](command-pattern/command-pattern.png)

    Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

    Applicability:

    * Use the Command pattern when you want to parametrize objects with operations.
    * Use the Command pattern when you want to queue operations, schedule their execution, or execute them remotely.
    * Use the Command pattern when you want to implement reversible operations.

    Ex: Created `commands` and your `conductor` -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/command-pattern)

* Interator pattern

    > "Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation."

    ![Interator pattern](interator-pattern/interator-pattern.png)

    Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

    The main idea of the Iterator pattern is to extract the traversal behavior of a collection into a separate object called an `iterator`.

    Applicability:

    * Use the Iterator pattern when your collection has a complex data structure under the hood, but you want to hide its complexity from clients (either for convenience or security reasons).
    * Use the pattern to reduce duplication of the traversal code across your app.

    Ex: Created `Interator` class -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/interator-pattern)

* Observer pattern

    > "Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and update automatically."

    ![Observer pattern](observer-pattern/observer-pattern.png)

    Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

    Applicability:

    * Use the Observer pattern when changes to the state of one object may require changing other objects, and the actual set of objects is unknown beforehand or changes dynamically.
    * Use the pattern when some objects in your app must observe others, but only for a limited time or in specific cases.

    Ex: Created `subcribe` and `notify` -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/observer-pattern)

* Strategy pattern

    > "Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it."

    ![Strategy pattern](strategy-pattern/strategy-pattern.png)

    Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

    The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called `strategies`.

    Applicability:

    * Use the Strategy pattern when you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime.

    * Use the Strategy when you have a lot of similar classes that only differ in the way they execute some behavior.

    * Use the pattern to isolate the business logic of a class from the implementation details of algorithms that may not be as important in the context of that logic.

    * Use the pattern when your class has a massive conditional operator that switches between different variants of the same algorithm.

    Ex: Created Log`Strategy` -> [Code](https://github.com/laissonsilveira/nodejs-design-patterns/tree/main/strategy-pattern)
