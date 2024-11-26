The spread and rest operators in JavaScript are represented by three dots (...). Though they look identical, they serve different purposes depending on the context.


---

1. Spread Operator (...)

The spread operator is used to expand elements of an array, object, or iterable into individual elements. It is often used in situations where we need to split or copy data.

Use Cases for Spread Operator

Copying or cloning arrays/objects.

Merging arrays or objects.

Passing array elements as arguments to functions.


Code Examples

(a) Expanding Arrays

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]

(b) Copying Objects

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, city: "New York" };
console.log(updatedUser); // Output: { name: "Alice", age: 25, city: "New York" }

(c) Passing Elements as Function Arguments

const nums = [5, 10, 15];
console.log(Math.max(...nums)); // Output: 15


---

2. Rest Operator (...)

The rest operator is used to collect multiple elements and condense them into a single array or object. It is primarily used in function parameters or destructuring.

Use Cases for Rest Operator

Handling a variable number of function arguments.

Collecting the "rest" of the elements during destructuring.


Code Examples

(a) Function Parameters

function sum(...args) { // Collects all arguments into an array
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

(b) Array Destructuring

const fruits = ["apple", "banana", "cherry", "date"];
const [first, second, ...restFruits] = fruits;
console.log(first);       // Output: apple
console.log(second);      // Output: banana
console.log(restFruits);  // Output: [ "cherry", "date" ]

(c) Object Destructuring

const person = { name: "Bob", age: 30, city: "Boston", country: "USA" };
const { name, ...details } = person;
console.log(name);      // Output: Bob
console.log(details);   // Output: { age: 30, city: "Boston", country: "USA" }


---

Key Differences


---

Practical Use Case

Combining Rest and Spread

function displayUserDetails(name, ...hobbies) {
    console.log(`Name: ${name}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}

const userHobbies = ["Reading", "Gaming", "Cycling"];
displayUserDetails("Charlie", ...userHobbies);

/*
Output:
Name: Charlie
Hobbies: Reading, Gaming, Cycling
*/

Summary

Spread expands elements of arrays/objects or passes elements as arguments.

Rest gathers multiple values into arrays/objects or function arguments.
These operators simplify working with arrays, objects, and dynamic arguments in JavaScript.


