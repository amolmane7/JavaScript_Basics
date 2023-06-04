//Numbers

let x = 10;
let y = 12.4;

console.log("value of x is "+x+ " and y is "+y );

//String

let name = "Ravindra";
var color = "fair";

console.log("Name is "+name+ " and color is "+color);

//Boolean

status = true;

console.log(status);

//Object

const person1= { firstname : "Ajinkya" , 
                  lastName : "Rahane" , 
                       age : 44};

console.log(person1.firstname+ " "+person1.lastName+" age is "+person1.age);

//Array

const fruits =['Apple','Mango','Grapes','Orange'];

console.log(fruits.toString());
console.log(fruits.at(1));

const newFruits = [];
console.log(fruits.copyWithin(newFruits));

//Date

const d = new Date("2023-01-06");

console.log(d);