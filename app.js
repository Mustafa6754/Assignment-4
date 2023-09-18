
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Function to get user input
function getUserInput(promptMessage) {
    return parseInt(prompt(promptMessage));
}

// Get the number for the multiplication table from the user
const tableNumber = getUserInput("Enter the number for the multiplication table: ");
const tableLength = getUserInput("Enter the length of the multiplication table: ");

// Check if the input is a valid number
if (isNaN(tableNumber) || isNaN(tableLength)) {
    console.log("Please enter valid numbers.");
} else {
    console.log(`Multiplication table for ${tableNumber} up to ${tableLength} rows:`);
    for (let i = 1; i <= tableLength; i++) {
        console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
    }
}
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Printing items of the 'fruits' array using a for loop:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
const A = [24, 53, 78, 91, 12];
let minNumber = A[0];
for (let i = 1; i < A.length; i++) {
    if (A[i] < minNumber) {
        minNumber = A[i];
    }
}
console.log("Multiples of 5 ranging from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}