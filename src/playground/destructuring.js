
///// OBJECT DESTRUCTURING
//const person = {
//    name: "Markus",
//    age: 24,
//    location: {
//        city: "Helsinki",
//        temp: 3
//    }
//};
//
//const {name: firstName = "Anonymous", age} = person;
////const name = person.name;
////const age = person.age;
//console.log(`${firstName} is ${age}.`);
//
//const {city, temp: temperature} = person.location;
//if (city && temperature) {
//    console.log(`It's ${temperature} celcius in  ${city}`);
//} 

//const book = {
//    title: "Ego is the enemy",
//    author: "Ryan Holiday",
//    publisher: {
//        name: "Penguin"
//    }
//}
//
//const { name: publisherName = "Self-Published" } = book.publisher;
//console.log(publisherName);

///// ARRAY DESTRUCTURING
//const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];
//const [, city, state = "New York"] = address;
//console.log(`You are in ${city} ${state}.`);

const item  = ["Coffee (hot)", "2.00 €", "2.50 €", "2.75 €"];

const [product, ,priceMedium] = item;

console.log(`A medium ${product} costs ${priceMedium}`);