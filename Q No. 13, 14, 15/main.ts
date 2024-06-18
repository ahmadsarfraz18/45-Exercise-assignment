// Q No.13

// Use of For Each loop.
/* 
Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several
examples. Use your list to print a series of statements about these 
items, such as “I would like to own a Honda motorcycle.”
*/
let transports: string [] = ["Honda MotorBike", "Tesla Car", "Bianchi Bicycle"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`)
});

// This method also can be used...
let transportation:string[]=["Motorcycle","Car","Train","Cycle"];

for(let i=0; i<transportation.length; i++){
    console.log(`I would like to own a ${transportation[i]}.`)
}
// Q No. 14

let guests: string [] = ["Umar", "Shahnawaz", "Faisal", "Umair", "Bilal"]

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner ?`);
})

// Q No.15

let unableToAttend = "Faisal";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest.

let newGuest = "Zohaib";
guests[guests.indexOf(unableToAttend)] = newGuest

// New Invitation

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinnet ?`);
})