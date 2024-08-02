console.log("sonal patel")
//  new file  //

const accountid = 121212
let accountemail = "123@gmail.com"
var accountpassword = "343444"
acountcity = "bhopal"
let accountstate;

// we can change all but not change const //
accountemail = "111@gmail.com"

//  accountid = 2 // const only one time use
console.log(accountemail) 

/*
prefer not to use var
because of issue in block scope and functional scope

scop means {} 
*/

// in table we show //

console.table([accountid,accountemail,accountpassword,acountcity,accountstate])
