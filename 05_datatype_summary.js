// ***** notes *****
// 9 
// ====== in interview
// +++ datatypes +++
// ========================
// primitive
// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 10.9
const isloggedin = false
const outsidetemp = null
let useremail;

const id = Symbol("123")
const anotherid = Symbol("123") 
console.log(id === anotherid); // output false

const bignumber = 2345443242344234n



// =========================

// reference type/ non premitive
// 3 types : array, objects, functions
const heros =["sss", "ddd"] // array

let myobj = {
    name : "asd",
    age : 11
}  // object

const myfunction = function(){
    console.log("hello world");
} // create function


// if we want to see datatype
console.log(typeof variablename)
