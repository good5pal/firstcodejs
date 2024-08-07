// 4
// datatype conversion 

let scrore = 33

// two way we can declare variable types
console.log(typeof score);
console.log(typeof(score));

// if we can chage "33" then output string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// this time 33 is calling number
console.log(valueInNumber);
// if change score "33abd" than

// output nan (not a number) output

// if score = null than output is 0

// if score = undefine thean output nan (not a number)

// if score = true than output 1

// if score = false than output 0

// if score = "abcd" than output nan

// "33" = 33
// "33abs" = nan
// true = 1; false = 0

let isloggedIn = 1
let booleanloggedIn = Boolean(isloggedIn)
console.log(booleanloggedIn);

// 1 = true ; 0 = false
// "" = false
//"abg" = true

let someNumber = 33

let stringNumber = string(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// output 33 and string

// ==========

// ******  oprations  ******
let value = 3
let negvalue = -value
console.log(negvalue);
// output -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);
// console.log(2/2);

// this is string
let str1 ="hello "
let str2 = "everyone"
let str3 = str2 + str2
console.log(str3);
// output = hello everyone

// **** complax ****
console.log("1" + 2);  // output 12
console.log(1 + "2");// output 12 
console.log("1" + 2 + 2); // output 122 
console.log(1 + 2 + "2");// output 32

console.log(true)  // output true
console.log(+true); // dont use this
console.log(+""); // dont use this

// let num1, num2, num3// dont use this
// num1 = num2 = num3 = 2+2// dont use this

// **** prefixed ***
let gamecounter = 100
gamecounter++;  // if write ++gamecounter then output also 101
console.log(gamecounter); // output 101

// ***** comparison of datatypes *****

// all answer true or false
// console.log(2 > 1); 
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// ===========================

// answer true (dont use like this)
// console.log("2" > 1);
// console.log("02" > 1);
//=====================

// in null (dont use like this)
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// in undefine (dont use like this)
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ==== strict chack
 console.log("2" === 2);

 