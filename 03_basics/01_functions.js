//functions---> jitne bhi lines ka code likha hai usko humne ek package mai bnd kr diya hai us function ki 
// hum jha chahe wha copy le ja skte hai

console.log("H");
console.log("i");
console.log("t");
console.log("e");
console.log("h");

function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("h");
}

sayMyName      // ye reference hai function ka(ye batat hai ki function wha per present hai)
sayMyName()   // ye excuetion hai function ka  ( ye print krwata hai values ko )

// function ---> this is a keyword
// sayMyName----> this is varriable name of function
// (){} -----> defination of function or syntax of function



// function of addition of two numbers 

function addTwoNumbers(Number1,Number2){
    console.log(Number1+Number2);
}
addTwoNumbers();  // output--> it show Nan (not a number ) ---> this is a argument--> value is not given 

// addTwoNumbers(4,5);

addTwoNumbers(4,"4");  // output-> 44 because assume kr lega ki wo bhi string hi hoga pass wala
addTwoNumbers(4,null)   // o/p---> 4

// Note--> functions ko jb call krwate hai tho usko bolte hai arguments (example--> addtwonumbers(4,null))
//functions k andhar jo bhi input lete hai tho usko bolte hai parameters


//example---2  (output undefind aata hai)
function add2NUM(Num1,Num2){
   console.log(Num1+Num2);
}

const result=add2NUM(3,4)
console.log("Result:", result); // output give Undefind --> because  humne return kuch kra hi nhi function k andhar se(mtlb humne function se wapis kuch nhi bheja return mai)


//example --> 3
function ADD(N1, N2){
    let result=N1+N2;
    return result;   // or return N1+N2;
    console.log("Hitesh")  // ye Hitesh kbhi print nhi hoga because return k baad kuch bhi ho wo print nhi krta
}

const result1=ADD(4,3);
console.log(result1);  // isme print hoga 7 kuji hum function se return kr rhe hai value


// function example ----> 4
function  loginUserName(username){
    return `${username} just logged in`
}

loginUserName("hitesh");    // output kuch show nhi krega per function ne return kra hai kuch per humne usse print nhi krwaya hai


console.log(loginUserName("hitesh"));  // output Hitesh just logged in show krega because hum print krwa rhe hai value ko

console.log(loginUserName());   // output will be[ undefind just logged in]  because humne kuch pass hi nhi kra hai

//function example ----> 5 (using of if ,else statement)

function ad(usname){

    if(usname===undefined){    // we can also write !usname it is also equivalent to usname===undefined
        console.log("please enter a username");
        return   // return ki help se ye yhi ruk jayega
    }
    return `${usname} logged in`
}
console.log(ad()); 


//function ex-----> 6 (we can also define some values before)

function AA(ussname="sam"){
    if(ussname===undefined){
        console.log("he was my good friend");
    }
    return `${ussname} just logged in`
}
console.log(AA());  // agr value nhi denge tho wo always else wali situation mai jayega
console.log(AA("hitesh"))  // agr value denge tho wo always overwrite kr dega


//  use of ---> Rest operator in function, it can also called spread operator when we use in js

// example of  function without using rest operator
function  rest(num1){
    console.log(num1);
}
rest(20,40,50);   //print only one value at this time in output


//example of rest operator with function [ representation---> (...num)]
function  rest(...num1){
    console.log(num1);
}
rest(20,40,50);   //print all values in the format of array or all values are present in the array


// interview question --> rest operator using with function
function  rest(val1,val2,...num1){
    console.log(num1);
}
rest(20,40,50,60);   //val1 and val2 value le lenge(print nhi hoga) 50 and 60  rest will be print


// functions ko object mai pass krna 

//method 1---> by creating object and pass in the function
let newwwobj={
    use:"name",
    price:100,
}

// anyobj-----> iske use se hum kisi bhi object ko access kr skte hai bar bar object pas krne ki jarurat nhi hai

function CalculatePrice(anyobj){
    console.log(`username is ${anyobj.use} and the price is ${anyobj.price}`);
}

CalculatePrice(newwwobj);

//method 2---> not creating sperately object 


function Callllculate(anyobj){
        console.log(`username is ${anyobj.usss} and the price is ${anyobj.pric}`);
}

// direct object k sath pass krwa do
Callllculate({
     usss:"priyanshu",
     pric:100
})


// now pass array into function
const MYARRAY=[12,14,44,66];
function CalculateMYArray(getarray){
    return getarray[1];
}

//console.log(CalculateMYArray(MYARRAY));   // this is the one method to access the value
console.log(CalculateMYArray([12,22,12,12,12]));  // eisme output 22 aayega , direct array bhi pass kr skte hai