let AB = "a";
let BC = "b";
let AC = "c";

if (AB === BC && AB === AC) {

    console.log("triangle is equilateral ")
} else if (AB === BC || AB === AC || BC === AC) {
    console.log("Triangle is Isosceles")
} else {
    console.log("Triangle is Scalene")
};


// fizz nummber 


let num = 100;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, " = Fizz buzz");
    } else if (i % 5 === 0) {
        console.log(i, " = buzz");
    } else if (i % 3 === 0) {
        console.log(i, " = Fizz ");
    }
}
