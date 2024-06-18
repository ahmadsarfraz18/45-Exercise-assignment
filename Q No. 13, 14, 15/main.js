// Q No.13
// Use of For Each loop.
var transports = ["Honda MotorBike", "Tesla Car", "Bianchi Bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
// Q No. 14
var guests = ["Umar", "Shahnawaz", "Faisal", "Umair", "Bilal"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner ?"));
});
// Q No.15
var unableToAttend = "Faisal";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest.
var newGuest = "Zohaib";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New Invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinnet ?"));
});
