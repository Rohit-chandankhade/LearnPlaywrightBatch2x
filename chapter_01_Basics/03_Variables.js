var a = 10;
let b = 20;
const c = 12.45;

console.log(a, b, c);


//********************************************************** var **************************************** 
// re declaring 
var a = 20;
console.log(a);

// re assiging 
a = 30;
console.log(a);


var browser = ["chrome", "edge", "firefox"];

// for  loop 
for (var i = 0; i < browser.length; i++) {
    console.log(browser[i]);
}

// i value is getting leaked outside loop 
console.log("loop index value is getting printed outside ", i);

// var is functioned scoped  (means it varaible declared with var can be availble anywhere inside the function)
function variable() {
    if (true) {
        var d = 50;  // where d is  declared inside the if block but still the value is 50 when we are calling it outside the if block
    }

    console.log(d);

}

variable();


// **************************************************** LET ******************************************

// let and const example , these are block  scoped

// function letFunction() {
// if (true) {
//     let f = 20;
// }

// console.log(f);
// }
// letFunction(); // when  we call this function we will get error bcoz the let variable are block scoped
//  when calling outside of block its getting error

// re assign 
let g = 60;
console.log(g);
g = 70;
console.log(g);

// for let re declare is not possible we will get error


//************************************************************* CONST ********************************** */

//once delcare with const it  value dont change it fixed we cant reassign or redclare 
const j = "rohit";
console.log(j);






