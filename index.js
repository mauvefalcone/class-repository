/*Exercise 1 : Library System
Create a Book class and a Library class. The Library class should allow you to:
Add a book.
Search for a book by title.
List all available books.
Borrow a book by marking it as unavailable.*/

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(book) {
        this.books.push(book);
    }

    searchByTitle(title) {
        return this.books.find(book => book.title.toLowerCase() === title.toLowerCase())
    }

    listAvailableBooks() {
        return this.books.filter(book => book.available);
    }

    borrowBook(title) {
        const book = this.searchByTitle(title);
        if (book && book.available) {
            book.available = false;
            console.log(`You have successfully borrowed "${book.title}" by ${book.author}`);
        } else if (book && !book.available) {
            console.log(`Sorry "${book.title}" is currently unavailable.`);
        } else {
            console.log(`Book titled "${title}" not found in the library.`);
        }
    }
}

let library = new Library();

let book1 = new Book("Pride and Prejudice", "Jane Austin");
let book2 = new Book("Davinci's Code", "Dan Brown");
let book3 = new Book("Harry Potter and The Sorcorers stone", "J.K Rowling");
let book4 = new Book("To Kill a Mocking Bird", "Harper Lee");

// add books
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

// search by title
let searchedBook = library.searchByTitle("pride and prejudice");
console.log(searchedBook);

// list
console.log("Available books:", library.listAvailableBooks());

// borrow
library.borrowBook("Davinci's code");

// borrow again
library.borrowBook("Davinci's code");

// list again
console.log("Available books:", library.listAvailableBooks());

/*Exercise2 : E-commerce Shopping Cart
Create a Product class to represent a product with properties such as name, price, and quantity. Then create a ShoppingCart class with the following methods:
addProduct(product, quantity): Adds the specified quantity of a product to the cart.
removeProduct(product): Removes a product from the cart.
getTotal(): Returns the total cost of the cart.
checkout(): Clears the cart after printing the total.*/

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product, quantity) {
        return this.products.push(product);
    }

    listProducts() {
        return this.products.map(item => item);
    }

    removeProduct(productname) {
        this.products = this.products.filter(item => item.name !== productname);
        return this.products;
    }

    getTotal() {
        return this.products.reduce((total, product) => total + product.price, 0)
    }

    checkOut() {
        const total = this.getTotal();
        this.products.length = 0;

        return total;
    }
}

let cart = new ShoppingCart();

let product1 = new Product("Acrylic Powder", 6500, 1);
let product2 = new Product("Monomer", 2500, 1);
let product3 = new Product("Nail Stand", 4500, 1);
let product4 = new Product("Chrome Powder", 2000, 1);
let product5 = new Product("Pink Acrylic Powder", 1500, 1);

// add products
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4);
cart.addProduct(product5);

console.log(cart.listProducts());

// remove product
console.log(cart.removeProduct("Pink Acrylic Powder"));
console.log(cart.listProducts());

// get total
console.log("Total:", cart.getTotal());

// check out
console.log("Total:", cart.checkOut());

console.log(cart.listProducts());

/*Exercise: Task Manager
Create a Task class and a TaskManager class. The TaskManager should be able to:
Add a new task.
Mark a task as completed.
List all tasks (both completed and pending).
List only pending tasks.*/

class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
}

class TaskManager {
    constructor() {
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task);
    }

    markComplete(description) {
        const task = this.tasks.find(task => task.description === description);
        if (task) {
            task.completed = true;
        } else {
              console.log('Task not found.');
        }
        return task
    }

    listAll() {
        this.tasks.forEach(task => {
            console.log(`${task.description} - ${task.completed ? 'Completed' : 'Pending'}`)
        })
        
    }

    listPending() {
        this.tasks.filter(task => !task.completed).forEach(task => {
            console.log(`${task.description} - Pending`);
        })
    }
}

let myTasks = new TaskManager();

let task1 = new Task("Meal prep");
let task2 = new Task("Read a book");
let task3 = new Task("Bake lemon cake");
let task4 = new Task("Clean room");

// add task
myTasks.addTask(task1);
myTasks.addTask(task2);
myTasks.addTask(task3);
myTasks.addTask(task4);

// mark complete
console.log(myTasks.markComplete("Bake lemon cake"));

// list all
myTasks.listAll();

// list pending
myTasks.listPending();