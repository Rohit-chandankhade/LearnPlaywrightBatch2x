let a = [1, 2, 3, 4, 5];

console.log(a[2]);
console.log(a[6]); // its not present so give undefined 

let b = [1, "rohit", null, undefined, true]; // it can hold homgenuse value 

// multiple ways to create arrray 

let c = new Array(3);
console.log("length of array ", c.length);

let d = new Array(3, 4, 5, 67);
console.log(d);

let e = Array.of(10, 30, 40, 50);
console.log(e);

let f = Array.from("hello"); // create mutiple character 
console.log(f);

// reverse index 

let g = ["rohit", "ronit", "rani"];
console.log(g[1]);

console.log(g.at(-1)); // reverse index 
console.log(g.at(-2));

// *********** Adding and removing

let h = [1, 2, 3, 4, 5, 6];
h.push(7); // add at the end 
console.log(h);

h.pop();
console.log(h); // removing from the end 

// Adding at begning 
h.unshift(4);
console.log(h);

// remove from the beging 
h.shift();
console.log(h);

// adding and removing elemmnt from middle or anywhere based on index 

let i = [1, 2, 3, 44];
i.push(45, 46, 47);
console.log(i);

i.splice(2, 1);  // it will remove 3 , in this 2= index , 1= how many item to delete 1
console.log(i);

i.splice(4, 1, 99); // it will go to 4th index  , it  will remove 1elemt 1 , and insert 99 in place of removed one 
console.log(i)

i.splice(4, 0, 100); // itss telling dont delete add 100 on 4 index 
console.log(i);

i.splice(3, 2, 100, 101);// ita telling at3 index , delete 2 vaue and add 100 and 101
console.log(i);


// real example for the above learnig '


let j = ["opera", "UC", "Edge", "chrome"];
j.shift();
console.log(j);

// iterrate over all the browser 

for (let i = 0; i < j.length; i++) {

    console.log(j[i]);
}

// ********************************* searching 

let k = ["rohit", "ronit", "rani", "rohit"];
console.log(k.indexOf("rani"));
console.log(k.lastIndexOf("rohit"));
console.log(k.indexOf("rohit"));


// includes  return true false 
console.log(k.includes("rohit"));
console.log(k.includes("ron"));

// ***************** FIND 
let l = [1, 2, 3, 4, 5, 6, 7];
console.log(l.find(x => x > 5));
console.log(l.findIndex(x => x > 6));
console.log(l.findLast(x => x > 6));
console.log(l.findLastIndex(x => x > 6));


// ******************************** Iterate over array 

// by using for loop 

let m = ["rohit", "ronit", "rani", "rohit"];

for (let i = 0; i < m.length; i++) {
    console.log(m[i]);
}

console.log("----------------------------------------------------------------")

for (let m1 of m) {
    console.log(m1);
}

m.forEach((m, index) => {
    console.log(m, index);

})


//*************************** MAP  */
// it return same values but based on some condition 
let n = [24, 45, 7, 4, 8];

let result = n.map(x => x > 10 ? "pass" : "fail");
console.log(result);

// filter will sshow the valees that pass the test 
let result2 = n.filter(x => x > 10);
console.log(result2);

// reduce - to redut the value ;;ike after doing sum or minus 

let num = n.reduce((a, b) => a + b, 0);
console.log(num);

// flat multiple array into single array 

let o = [[1, 2], [3, 4], [5, 6]];
console.log(o.flat());


//****************************************** Array Sorting  */

let p = ["rohir", "ronit", "rani"];
console.log(p.sort());

let q = [10, 11, 45, 2, 3];  // this lexical sorting based on first number here number is treated as string thats y 
console.log(q.sort());

// ***********************************Sorting using arrow function
q.sort((a, b) => a - b);  // acsending sorting 
console.log(q);

q.sort((a, b) => b - a);  // descending sorting 
console.log(q);


let r = [1, 2, 3, 4, 56];  // it will create an new array dont not change the existing array 
console.log(r.slice(1, 3))
console.log(r.slice(2, 4));
console.log(r.slice(2));
console.log(r.slice(-2));
console.log(r.slice(0));


//********************************************** */ Array concat 

let s = [1, 2];
let t = [3, 4];

let u = s.concat(t);
console.log(u);

/// another way to concat 
let v = [...s, ...t];
console.log(v);


// join 

let w = ["rohit", "ronit", "rani"].join("|");
console.log(w);

// ****************** isArray 

let r1 = Array.isArray([1, 2, 3, 4]);
console.log(r1);


//*************** every  */
let r3 = [10, 20, 30, 40].every(x => x < 70);
console.log(r3);

// ************** some (atleast 1 should pass )
let r4 = [10, 20, 30, 40].some(x => x > 30);
console.log(r4);



