// Q No.40...
// Define the make_album function.
function make_album(artist, title, tracks) {
    let album = {
        artist: artist, title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling 3 function and creating 3 variables with different values...
let album1 = make_album("Atif Aslam", "Album title 1");
let album2 = make_album("Amanat Ali", "Album tile");
let album3 = make_album("Rahat Fatah Ali", "Artist", 102);
// Printing in variables...
console.log(album1);
console.log(album2);
console.log(album3);
// Q No. 41... 
// Magicians: Display magician names from an array...
let magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
// Q No. 42...
// Great magicians: Add "the great" to magician names.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names...
export {};
