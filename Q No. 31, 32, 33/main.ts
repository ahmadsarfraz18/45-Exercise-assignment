// Q No. 31...

// let userName: string [] =[];
// if (userName.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     console.log("Welcome back!")  // Removing all usernames ensures the message  "we need to find some users!" is printed...  
// };


// Q No. 32...

// let current_user: string [] =["Mahar", "Ahmad", "Sarfraz", "Muhammad Ahmad Mujtaba", "Subhan Abdullah", "Qasim Ali"];
// let new_user: string [] =["Mahar", "Shahid", "Hamid", "Maqbool", "Sajid", "Umar"];
// new_user.forEach(newUser => {
//     if (current_user.some (currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available!`);
//     }
// });

// Q No. 33...

let numbers: number[] =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number} ${suffix}`);
});
