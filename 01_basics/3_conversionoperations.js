let age=33;
console.log(typeof age);  // type of  check krna jaruri hai varriable ka javascript mai
console.log(typeof (age))   // second method typeof declare krne ka

// now convert string into number
let score="44";
console.log(typeof score);          //convert krne se pahle  string tha
let convertIntoNumber=Number(score);
console.log(typeof convertIntoNumber);        //convert krne k baad   number mai ho gya


//example 2----> undefined , string  k case mai bhi NaN aayega
let score1="33abs"; 
console.log(typeof score1);                //convert krne se pahle string tha
let convertIntoNum=Number(score1);
console.log(typeof convertIntoNum);       // convert krne k baad number bn gya
console.log(convertIntoNum);                // actually mai type NaN aaya (Not a Number)


//example 3
let score3=null; 
console.log(typeof score3);                //convert krne se pahle null tha
let convertIntoNum1=Number(score3);
console.log(typeof convertIntoNum1);       // convert krne k baad object bn gya null k case mai
console.log(convertIntoNum1);                // actually mai type mai 0 aaya 


//example 4  (boolean k case mai 1 or 0 aayega  agr convert krte hai into number)


//note
//  "33"=>33
// "33abs"=>NaN, but type number hi hai iska
// true => 1, false =>0 


// convert number into boolean
let num=1;
console.log(typeof num);
let convertIntoBool=Boolean(num);
console.log(typeof convertIntoBool);
console.log(convertIntoBool);

// 1 => true , 0=>false , ""(empty string)=>false

// convert number into string
let numm=33;
console.log(typeof numm);
let convertIntoStr=String(numm);
console.log(typeof convertIntoStr);
console.log(convertIntoStr);