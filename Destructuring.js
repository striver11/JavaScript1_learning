Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects into individual variables. It makes code cleaner and more readable by reducing the need for repetitive access.


---

1. Array Destructuring

This allows extracting elements from an array into variables.

Basic Example

const colors = ["red", "green", "blue"];
const [primary, secondary, tertiary] = colors;

console.log(primary);   // Output: red
console.log(secondary); // Output: green
console.log(tertiary);  // Output: blue

Practical Use Case: Swapping Variables

let a = 10, b = 20;
[a, b] = [b, a]; // Swap values using destructuring

console.log(a); // Output: 20
console.log(b); // Output: 10

Skipping Elements

const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers; // Skip the second element

console.log(first);  // Output: 1
console.log(third);  // Output: 3

Using Rest with Arrays

const fruits = ["apple", "banana", "cherry", "date"];
const [first, ...remaining] = fruits;

console.log(first);       // Output: apple
console.log(remaining);   // Output: [ 'banana', 'cherry', 'date' ]


---

2. Object Destructuring

This extracts properties from an object into variables.

Basic Example

const user = { name: "Alice", age: 25, city: "New York" };
const { name, age, city } = user;

console.log(name); // Output: Alice
console.log(age);  // Output: 25
console.log(city); // Output: New York

Practical Use Case: Default Values

const employee = { id: 101, position: "Developer" };
const { id, position, salary = 50000 } = employee; // Default value for `salary`

console.log(salary); // Output: 50000

Renaming Variables

const product = { productName: "Laptop", price: 1000 };
const { productName: name, price: cost } = product; // Rename variables

console.log(name); // Output: Laptop
console.log(cost); // Output: 1000

Using Rest with Objects

const student = { name: "John", grade: "A", age: 16, school: "High School" };
const { name, ...details } = student;

console.log(name);    // Output: John
console.log(details); // Output: { grade: 'A', age: 16, school: 'High School' }


---

3. Nested Destructuring

You can destructure nested arrays or objects.

Nested Array

const points = [[10, 20], [30, 40]];
const [[x1, y1], [x2, y2]] = points;

console.log(x1, y1); // Output: 10 20
console.log(x2, y2); // Output: 30 40

Nested Object

const person = {
    name: "Emma",
    address: {
        city: "London",
        country: "UK",
    },
};

const { name, address: { city, country } } = person;

console.log(city);   // Output: London
console.log(country); // Output: UK


---

4. Destructuring in Function Parameters

Destructuring can simplify function arguments, especially when dealing with objects.

Example

function greetUser({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}

const user = { name: "Mike", age: 30 };
greetUser(user);
// Output: Hello Mike, you are 30 years old.

Using Default Values

function display({ name = "Guest", role = "User" }) {
    console.log(`${name} is a ${role}`);
}

display({ name: "Sophia" }); // Output: Sophia is a User
display({});                // Output: Guest is a User


---

5. Combined Example: Practical Use

const apiResponse = {
    status: "success",
    data: {
        user: {
            id: 101,
            name: "Alice",
            email: "alice@example.com",
        },
    },
};

const { 
    status, 
    data: { user: { id, name, email } } 
} = apiResponse;

console.log(status); // Output: success
console.log(id);     // Output: 101
console.log(name);   // Output: Alice
console.log(email);  // Output: alice@example.com


---

Summary

Array Destructuring is great for handling ordered data.

Object Destructuring is perfect for working with named data.

Rest and Default Values improve flexibility and robustness.

Function Parameter Destructuring simplifies and organizes inputs.


Let me know if you'd like examples tailored to a specific scenario!

