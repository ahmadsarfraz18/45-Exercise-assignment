// Q No.37...
// function make_shirt (size: string = "Large", message: string = "I love TypeScript"){
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt();
// function make_shirt1 (size: string = "medium", message: string = "I love Coding") {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
// }
// make_shirt1 ();
// Q No.38...
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Kabul", "Afghanistan");
// Q No.39...
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Dehli", "India"));
console.log(city_country("Paris", "Farance"));
export {};
