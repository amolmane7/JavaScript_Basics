const person = {
    name : "Ajay",
    address : "mumbai",
    pin : "453545",
    myobj : {age : '29'}
};

console.log(person);

console.log("age : "+person.myobj.age);

console.log("age : "+person.myobj['age']);