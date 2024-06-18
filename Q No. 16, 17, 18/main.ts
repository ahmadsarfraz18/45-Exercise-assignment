// // Q No 16.

// let guests: string[] = ["Umar", "Shan", "Arsalan", "Haider", "Usman",]

// console.log("Great News! I found a bigger dinner table!");

// // Adding more guests.

// guests.unshift("Saad");
// guests.splice(guests.length / 2, 0, "Umair");
// guests.push("Hamza");
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for the dinner ?`)
// });

// // Q No 17.

// console.log("Unfortunately, I can invite only two people for the dinner");

// while (guests.length > 2) {
// let removedGuest = guests.pop();
// console.log(`Sorry ${removedGuest}, I can't invite you for dinner.`);

// }

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner`);

// });

// guests.splice(0, guests.length);

// console.log(guests);  // Shows an empty list 

// Q No 18.

let places: string [] = ["Pakistan", "New Zealand", "Australia", "Iceland", "Japan", "Switzerland", "China", "Palestine"];

console.log("Original order:", places);

console.log("Alphabetical order:", [... places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [... places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);