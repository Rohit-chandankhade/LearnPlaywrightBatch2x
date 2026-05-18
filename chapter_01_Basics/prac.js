// let a = 5;
// console.log(a++ + ++a - --a + a-- + ++a);
// console.log(a);

// let a = 10;
// console.log(a-- + ++a - ++a + a-- + ++a); // 10 + 10 - 11 + 11 + 11
// console.log(a);  //  9 10 11 10 11



let a = 10;
console.log(a-- + --a - ++a + a++ + --a); //  10 + 8 - 9 + 9 + 9 = 27
console.log(a);  // 9 8  9 10 9  