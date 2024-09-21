//array--> it is a object , in other language it stores the multiple items in a single vairable name
// In javascript array are resizeable (mtlb isme aur elements hum add kr skte hai)
// Bascially It is mix of data types  --> ex- array k andhar array ho skte hai , can be string ,object


// array k andhar jb bhi copy operation perform krte hai tho Ye shallow copy and Deep copy bnata hai 
// shallow copy--> mtlb jo bhi change krenge wo original mai bhi change hoga
// Deep copy---->property do not share the same reference


//how to declare an array
const myArr=[0,1,2,3,4,5];
const myHeros=["Avengers", "Deadpool"];
const myArr2=new Array(1,3,4,5);

console.log(myArr[0]);   // print the array

//chrome mai inspect mai jaa kr prototype dekh skte hai 
const nu=[2,3,4];  // ye likh kr check kr lena


//methods in array

const MyArr=[0,2,3,5];
//MyArr.push(6);  // 1 method --> push
//MyArr.pop()      // 2 method---> pop (array k last wale element ko remove kr dega)
//MyArr.unshift(9)  // 3 method --> unshift(ye value add kr deta hai starting mai array k)
//MyArr.shift()      // 4 method -->shift (ye first wale element ko hta dega array k)
console.log(MyArr.includes(4));  // 5 method--> includes (data type --> boolean )  ye btata hai ki jo element daala hai wo present hai ya nhi
console.log(MyArr.indexOf(5));  //6 method->indexof( ye btatat hai ki jo element aapne diya hai wo kis index per present hai)


const newArr=myArr.join();  //7 method --> ye convert kr deta hai arrray k type ko string mai (typeof)
console.log(typeof newArr);   // type ab string bn chuka hai
console.log(newArr);
console.log(myArr);

// 8 method --> slice/splice 

console.log("A",myArr);        //original array

// yha per hum use krte hai slice ka
const myNew1=myArr.slice(1,3);     // 3 number wala include nhi hoga
console.log(myNew1);
console.log("B",myArr);    // original array after performing slice operation

// use of splice
const myNew2=myArr.splice(1,3);
console.log(myNew2);
console.log("c",myArr);  //original array after performing splice operation

// difference ---> original array mai frk aata hai after applying splice and slice operation



//array part 2-->

const Hero1=["KgF","GG", "MS"];
const Hero2=["super","Flash","Batman"];

//Hero1.push(Hero2);
//console.log(Hero1);  // yha per hum jo soch rhe hai ki array merge ho jayenge wo glt hai Hero2 add ho jata hai Hero1 mai but 
// wo Hero 2 ko as a single element hi le leta hai (bascially hum khe skte hai array k andhar ek aur array)

//console.log(Hero1[3][1]);  // value access hume is tarike se krni padegi(ye acha tarika nhi hai)


// use of concat
const allHeros=Hero1.concat(Hero2);
console.log(allHeros);    // concat method ki help se hum merge kr paate hai ache se dono arrays ko


//use of spread (better than concat) isme hum jitne chahe utne array ko merge kr skte hai

const all_heros=[...Hero1,...Hero2];

console.log(all_heros);

// use of flat method to  
const another_arrya=[1,2,3,[4,5,6],2,[8,7,[5,6]]];
console.log(another_arrya.flat(Infinity));   // infinity ki jgh value bhi daal skte hai but at this time infiity daal dete hai

// some methods
console.log(Array.isArray("Priyanshu"));  // check krta hai given jo value hai wo array hai ya nhi
console.log(Array.from("Hitesh"));         // from ---> convert the value into array
console.log(Array.from({name:"Hitesh"}))    // is case mai from convert nhi kr pata array mai tho ye empty array de deta hai

// of method --> use to convert into array with the given set of values
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));   // of jo hai wo convert kr dega given scores ko into array

