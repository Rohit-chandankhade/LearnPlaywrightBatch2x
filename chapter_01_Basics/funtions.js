function wrokers(status) {
    console.log("workers status is - ", status);
}

wrokers("offline");


function wrokers1(status) {
    console.log("workers status is - ", status);
    return "workes are back to work"
}

let back = wrokers1("online");
console.log(back);


// ********************************* mew function for add 

const addition = function (a, b) {
    return a + b;
}

let addddd = addition(4, 5);
console.log(addddd);


//********************** ARROW funtion  */

let gender = (sex) => sex;   // keep onlt the paramter and the reurn value , if we dont have retrun typee  we wont be using arrow funtion 
let gg = gender("male");
console.log(gg)
console.log(gender("male"));