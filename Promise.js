Here's a simple and clear example to help you understand JavaScript Promises:

Scenario: Fetching data from a server

We'll simulate fetching user data with a promise.

// Creating a Promise
const fetchData = (simulateSuccess) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateSuccess) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulate a 2-second delay
  });
};

// Using the Promise
fetchData(true)
  .then((result) => {
    console.log(result); // This will run if the promise is resolved
  })
  .catch((error) => {
    console.error(error); // This will run if the promise is rejected
  })
  .finally(() => {
    console.log("Fetch operation complete."); // Always runs
  });

Explanation:

1. Promise Creation:

fetchData is a function that returns a new Promise.

Inside the promise, resolve is called if the operation succeeds, and reject is called if it fails.

A setTimeout simulates an asynchronous operation.



2. Using then, catch, and finally:

.then() is called when the promise is resolved (success case).

.catch() is called when the promise is rejected (error case).

.finally() runs regardless of whether the promise was resolved or rejected.




Output (if simulateSuccess = true):

Data fetched successfully!
Fetch operation complete.

Output (if simulateSuccess = false):

Failed to fetch data.
Fetch operation complete.

Key Points:

Promises represent a value that might be available now, in the future, or never.

They make asynchronous code easier to manage and avoid the "callback hell" problem.


