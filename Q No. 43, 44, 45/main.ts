// Q No.43...
// Unchanged Management: Preserve the original magician names while creating a new "great" list...

// Function to show magicians from an array
// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }

// Function to add "the Great" to each magician's name...

// function makeGreat(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];

//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians[i] = "the Great " + magicians[i];
//     }

//     return greatMagicians;
// }

// // Array of magician's names
// const magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// // Call makeGreat function with a copy of the original array
// const greatMagicians: string[] = makeGreat([...magicianNames]);

// // Call the function to show original magicians
// showMagicians(magicianNames);

// // Call the function to show modified magicians
// showMagicians(greatMagicians);

// Q No.44...

/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call 
provides, and it should print a summary of the sandwich that is being ordered. Call the function
three times, using a different number of arguments each time.
 */

function makeSandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
}
// Call the function with different number of arguments...

makeSandwich("Cheeze", "Egg", "Bread");
makeSandwich("Ham", "Tomato", "Ketchup", "Chicken");
makeSandwich("Peanut", "Butter", "Sauce");

// Q No.45...
function createCar(manufacturer:string,model:string, ...options:{[key:string]:any}[]):{[ key: string ]: any }{

    let car :{[key:string]:any}={
    
        "manyfacturer":manufacturer,
        "model":model
    };
     
    for(let option of options){
    
        for(let key in option){
            car[key]=option[key];
        }
    }
    return car;
    }
    let carInfo=createCar('Toyota','Camry',{"color":"blue"},{"year":2022});
    console.log(carInfo);