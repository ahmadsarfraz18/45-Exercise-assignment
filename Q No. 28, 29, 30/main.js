// Q No. 28...
// let age = 25;
// if (age < 2) {
//     console.log("The person is a baby.")
// }
// else if (age < 4) {
//     console.log("The person is a toddler.")
// }
// else if (age < 13) {
//     console.log("The person is a kid.")
// }
// else if (age < 20) {
//     console.log("The person is a teenager.")
// }
// else if (age < 65) {
//     console.log("The person is an adult.")
// }
// else{
//     console.log("The person is an elder.")
// }
// Q No. 29...
// let favourite_fruits: string [] = ["Mangos", "Apples", "Bananas"];
// if (favourite_fruits.includes("Bananas")) {
//     console.log("You really like Bananas");
// }
// if (favourite_fruits.includes("Apples")) {
//     console.log("You really like Apples")
// }
// if (favourite_fruits.includes("Peaches")) {
//     console.log("You really like the Peaches")
// }
// if (favourite_fruits.includes("Mangos")) {
//     console.log("You really like Mangos")
// }
// Q No. 30...
let userName = ["Mahar", "Ahmad", "Sarfraz", "Muhammad Ahmad Mujtaba", "Subhan Abdullah"];
userName.forEach(userName => {
    if (userName === "admin") {
        console.log("Hello admin, Would you like to check the status report?");
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
});
export {};
