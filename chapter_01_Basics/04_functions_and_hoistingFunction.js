function add() {
    let a = 10;
    let b = 20;

    let add = a + b;
    console.log(add);
}

add();

//******************************** hoisting function */

sayHello(); // works even before the function is written

function sayHello() {
    console.log("Hello, world!");
}


