// Create two (2) Single Dimensional Array containing the following values:
const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge both arrays into a single array and log it to the console.
const mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers numerically in reverse and log it to the console.
const sortedNumbers = numbers.slice().sort((a, b) => b - a); // Create a copy to avoid modifying the original array
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// Sort names alphabetically and log it to the console.
const sortedNames = names.slice().sort(); // Create a copy to avoid modifying the original array
console.log("Sorted Names (Alphabetical):", sortedNames);
