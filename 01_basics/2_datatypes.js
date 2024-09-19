"use strict"        // treat all Js code as newer version //

// alert(3+3)   //we  are using nodejs not browser

//code readability should be high
console.log(3+3);  console.log("hitesh")      //ek line mai do code mt likho  (yha per semicolon lgana jaruri hai)

//data types
// 1 primitive data types

// primitive data types (7)==> String,boolean,undefined,symbol,null,number,Bigint

let name="priyanshu";
let age=19;
let islodIn=false;
console.log(typeof islodIn);

let id=Symbol("123");
console.log(typeof id);
// numbers=2^53
// bigint     // ye big companies mai use krte hai ya bdi website per
// string=> "" or ''   // it can be use in single quote or double quote
// boolean => true/false
// null  // it is basically a standalone value   or it indicates we have give to a empty value
// undefined
// symbol    // ye jyada tr react mai use krte hai  or kisi component ko unique btane k liye hum ye use krte hai


// object
console.log(typeof "string");   // type of  basically hume data k baare mai bta deta hai

// *********************************************************************************************
console.log(typeof  null);   // ye show krega object
console.log(typeof undefined)   //ye show undefined krega kuki undefind apne aaap mai ek type hai

// Non primitive data types --> array,object,functions

// 1 array
const Heros=["pri","naagraj","doga"];
console.log(typeof Heros);
//2 object
let myObj={
    name:"hitesh",
    age:12,
}

//3 function

// basic declaration of function---->function(){}

const myFunction=function(){
    console.log("Hello world");
}