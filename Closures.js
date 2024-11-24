function outerFunction(outerVariable) {
    // Outer function scope
    return function innerFunction(innerVariable) {
        // Inner function scope
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

// Create a closure
const closureFunction = outerFunction("Hello");

// Call the inner function with a new variable
closureFunction("World");

/*
Output:
Outer Variable: Hello
Inner Variable: World
*/


function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++; // Modify the private variable
        console.log(`Current Count: ${count}`);
    };
}

const counter = createCounter();
counter(); // Output: Current Count: 1
counter(); // Output: Current Count: 2
counter(); // Output: Current Count: 3
