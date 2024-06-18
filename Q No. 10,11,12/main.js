// Q No. 10
// This program will print a personal message.
// let myName: string = "Mahar Ahmad Sarfraz";
// console.log(`Hello ${myName} would you like to learn some TypeScript today`);
// Q No. 11
// Use of for loop
/*
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
// let names: string[] = ["Rizwan", "Babar", "Fakhar", "Saim Ayub"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// Q No. 12
/*
Greetings: Start with the array you used in Exercise 11, but instead of just
printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/
var names1 = ["Rizwan", "Babar", "Fakhar", "Saim Ayub"];
for (var _i = 0, names1_1 = names1; _i < names1_1.length; _i++) {
    var name_1 = names1_1[_i];
    console.log("Hello ".concat(name_1, ", would you like to learn some TypeScript today"));
}
