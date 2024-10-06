// scope representation----> {}   (function and if k sath aise represent krte hai)

//why we use scope?
//example-->
let a=10;
var b=20;   // ek bar declare krne k baad value wo hi rhe jaruri nhi change ho jaati hai baad mai declare krne per
const c=50;
b=45;
console.log(a);
console.log(b);  //output 45 print hoga
console.log(c); 


// example of block scope(bracket k andhar jo code hota hai block scope hota hai)
if(true){
    let a=40;
    const b=400;
    var z=100;  // var use nhi krte 
}

console.log(a);   // ye upper wali value hi print ho rhi hai jo humne if k upper declare kri thi
console.log(b);   // ye upper wali value hi print ho rhi hai jo humne if k upper declare kri thi
console.log(z);    // ye bracket wali value print ho rhi hai jo if k andhar hai 



//Nested Scope example

function one(){
    const username="priyanshu";
    function two(){            // two wala one wale function ki value access kr skta hai
        const user="suresh";
        console.log(username);
    }
   // console.log(user);      // yha per error show hoga kuki hum scope k bahr access nhi kr skte 
    two();
}
one();            // jb ye call hoga tb uske andhar wala two bhi call hoga tbhi hum print krwa payenge priyanshu ko


// nested scope concept in if else statement

if(true){
    const userna="priyanshu";
    if(userna==="priyanshu"){
        const ggg="hitesh";
        console.log(userna+ggg);  // ye run ho jayega kuki ye child hai jo ki parent ko access kr skta hai
    }
    console.log(ggg);  // ye error show krega kuki scope pahle hi khtm ho gya hai ggg wala upper 
}
console.log(userna); // ye bhi error show krega

//++++++++++++++++++++++++  interseting +++++++++++++++++++++++++++++++// 

//example 1--->
function addone(num){
    return  num+1;
}

addone(2);  // agr sirf ye likhenge tho bs functin call hoga
console.log(addone(2));

//example 2---> isko expression boltete hai jisme hum varriable mai store krwate hai
const myvalue=function addt(num1){
      return num1+2;
}
addt(4);
console.log(addt(4));


// now example 1 again (isme bs hum declare pahle kr detet hai) abhi koi error nhi aayega


addone(2);  // agr sirf ye likhenge tho bs functin call hoga
console.log(addone(2));

function addone(num){
    return  num+1;
}


//now example 2 again (eisme error aayega kuki hume pale declare krne k badd usko varriable mai hold bhi kra hai )
//output show krega (not access)

console.log(addt(4));
const myval=function addt(num1){
    return num1+2;
}
addt(4);