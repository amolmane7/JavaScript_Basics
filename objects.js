const employee = {firstName : "Rajiv" ,
                  lastName : "Kumar" ,
                   age : 43 ,
                   address : "xyz"};

  console.log("first_Name : "+employee.firstName+"\n"
               +"last_Name : "+employee.lastName+"\n"
               +"address : "+employee.address+"\n"
               +"age :"+employee.age);   
                             
employee.age = 50;
employee['44'] = "Fourty Four";
console.log(employee['age']);

console.log(employee);

//console.log(employee.44); // using . gets an error

console.log(employee['44']);
