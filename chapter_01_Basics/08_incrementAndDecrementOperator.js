
//++x → first change, then use
//x++ → first use, then change
// --x → first decrease, then use



let a = 10;

let b = ++a;  // a= 11 , = 11

console.log(b);
console.log(a);


// ************************************Another example *********************
let rohit = 22;
let ronit = 33;

let rani = --rohit + ronit--;  //21  33
console.log(rani);


// **************************Another example *****************************

let ron = 56;
let jon = 76;
let guen = 89;

let total = ron-- + ++jon - --guen;  //56 77  88  133 - 88
console.log(total);

