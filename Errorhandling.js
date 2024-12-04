Error Handling in JavaScript

Error handling in JavaScript ensures that your code gracefully handles unexpected situations instead of crashing. JavaScript provides tools like try...catch and custom exceptions to manage errors effectively.


---

1. try...catch Block

The try...catch block lets you handle errors that occur during code execution.

try {
    // Code that might throw an error
    let result = 10 / 0; // No error here (infinite in JS)
    console.log(result);
    throw new Error("Custom error message");
} catch (error) {
    // Handles the error
    console.error("An error occurred:", error.message);
} finally {
    // Executes regardless of whether an error occurred or not
    console.log("Cleanup operations can go here.");
}

Key Points:

try: Code that may throw an error is wrapped here.

catch: Handles errors thrown in the try block.

finally: Always runs, even if no error occurs (optional).



---

2. Throwing Errors

You can manually throw errors using the throw statement.

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divideNumbers(10, 0));
} catch (error) {
    console.error("Error:", error.message);
}

Common Error Types:

Error: Generic error.

TypeError: Errors due to wrong data types.

SyntaxError: Errors in code syntax (not catchable during runtime).

ReferenceError: Accessing undefined variables.

RangeError: Invalid range, e.g., out-of-bound values.



---

Throwing Custom Exceptions in JavaScript

You can create and throw custom exceptions to provide more descriptive error messages specific to your application's needs.


---

1. Throwing Custom Errors

Custom errors use the Error class or extend it for more specificity.

class CustomError extends Error {
    constructor(message) {
        super(message); // Call parent class constructor
        this.name = "CustomError"; // Set the error name
    }
}

function processOrder(order) {
    if (!order.paymentReceived) {
        throw new CustomError("Payment is required to process the order.");
    }
    console.log("Order processed successfully.");
}

try {
    const order = { paymentReceived: false };
    processOrder(order);
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Custom Error:", error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}


---

2. Custom Exception with Additional Details

You can add properties to your custom error for more information.

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field; // Custom property
    }
}

function validateUserInput(input) {
    if (!input.email.includes("@")) {
        throw new ValidationError("Invalid email format", "email");
    }
    console.log("Validation successful.");
}

try {
    const userInput = { email: "invalid-email" };
    validateUserInput(userInput);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`${error.name} on ${error.field}: ${error.message}`);
    } else {
        console.error("Unexpected error:", error.message);
    }
}


---

Best Practices for Error Handling in JavaScript

1. Use Specific Error Types: Differentiate errors with specific classes (e.g., TypeError, ValidationError).


2. Don’t Swallow Errors: Always log or handle errors appropriately to avoid silent failures.


3. Avoid Using try...catch Excessively: Use it for code that genuinely may fail, not as a control flow.


4. Use Finally for Cleanup: Release resources like file handles, database connections, etc.


5. Document Custom Errors: Make your custom exceptions self-explanatory.



By effectively managing errors and using custom exceptions, you can build more robust and maintainable JavaScript applications.

