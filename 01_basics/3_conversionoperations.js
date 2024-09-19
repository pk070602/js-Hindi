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



/*********************************** Operators **********************************/
//ex-1
let value=3;
let negVal=-value;
console.log(negVal);

//ex-2 (basics operations)
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);        //2 ki power mai aa jata hai two star lgane per
// console.log(3/8);
// console.log(8%5);



let str1="Hello";
let str2=" Priyanshu";
console.log(str1+str2);   //dono string add ho jayegi

//some typical cases
console.log(1+"3");
console.log("1"+3);  //output=>13
console.log("1"+3+2);  //starting agr string se ho tho wo baakiyo ko bhi string ki trh hi treat krega
console.log(2+3+"1");    //output=>51

console.log(4*3/2%2) ; //aisa code mt likho khrab tarika hai code review hi nhi hoga
console.log(+true);  //output 1 hoga 


let nu1 ,nu2,nu3;
nu1=nu2=nu3=2+2;  // ye tarika bhi sahi nhi hai khrab lgta hai code

//increment or decrement (prefixincrement and postfixincrement)
let gameCounter=100;
++gameCounter;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);

//https://tc39.es/ecma262/multipage/abstract-operations