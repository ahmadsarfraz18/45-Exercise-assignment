// // Q No. 22.
// let friends: string[] = ["Alice", "Bob", "Charlie"];
// console.log(friends[3]);  // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
// friends[2] = "Charlie";  // Correcting the error (in upper line) by accessing a valid index.
// Q Node. 23.
// let car = "Subaru";
// console.log("Is car == `Subaru`? I predict ture");
// console.log(car == "Subaru");
// console.log("Is car == `Toyota`? I predict false");
// console.log(car == "Toyota");
// Creat at least 10 tests, Have at least 5 tests evaluate true and other 5 tests evaluate to false.
// Q No. 24.
// Equality with strings.
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False
// Using the lower case function.
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical Tests.
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators.
console.log("Tests with `and` and `or`:");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in an Array.
var fruits = ["Banana", "Mango", "Orange", "Peach", "Pear", "Apple"];
console.log("Is `apple` in fruits ?");
console.log(fruits.includes("apple")); //True
// Tests whether an item is not in an Array.
console.log("Is `mango` not in fruits ?");
console.log(!fruits.includes("mango")); // True
