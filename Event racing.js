// Simulating asynchronous tasks with varying completion times
const task1 = new Promise((resolve) => {
  setTimeout(() => resolve("Task 1 completed"), 1000); // Completes in 1 second
});

const task2 = new Promise((resolve) => {
  setTimeout(() => resolve("Task 2 completed"), 500); // Completes in 0.5 seconds
});

const task3 = new Promise((resolve) => {
  setTimeout(() => resolve("Task 3 completed"), 2000); // Completes in 2 seconds
});

// Using Promise.race
Promise.race([task1, task2, task3])
  .then((result) => {
    console.log(result); // Logs: "Task 2 completed" (the fastest one)
  })
  .catch((error) => {
    console.error("Error:", error);
  });
