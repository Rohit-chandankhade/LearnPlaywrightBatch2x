let name = "rohit";

//single coat
let name1 = 'ronit';
// inside single coat we can have double coat
let surname = 'chandan"khade"';
console.log(surname);

let num = 3.15;
let number = 456;
let value = null;    // You are explicitly saying:“This variable currently has no value.”
let middle;   // undefined means a variable has been declared but not assigned

// typeof is nothing but an variable which will give its type 
// it is an  variable which will tell you the datatype 
console.log(typeof value);
console.log(typeof middle);


console.log(null == undefined);  // check only value 
console.log(null === undefined);  // check for value and type  ( null = object  and undefined  =  undefined )

let age = 10_00_00;
console.log(typeof age);


//********************** TEMPLATE LITERAL  */
let tiltChac = "rohit";
let full = `my name is ${tiltChac} `;

console.log(full);