const score=400;    // is statement mai javascript ne automatically define kiya hua hai ki ye number hai
console.log(score);

const balance=new Number(300);
console.log(balance);          // isme particullary number define kiya hai humne

console.log(balance.toString());  // humne num k method ka use krke string mai change kr diya
console.log(balance.toString().length);  // string k method ka use krke length nikal li

console.log(balance.toFixed(2));   //afte decimal 2 digit aapki fix ho jayegi (e-commerce mai jyada use krte hai)


const anotherNumber=2224.489;
console.log(anotherNumber.toPrecision(4));  //******** importANT concept */


const currency=10000000;
console.log(currency.toLocaleString());
console.log(currency.toLocaleString('en-IN'));   // commas lge aate hai jo number humne likha hai
//en-In indian currency k liye hai


//******************************* Maths *************************************** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.4));
console.log(Math.round(4.8));
console.log(Math.min(4,8,9));
console.log(Math.max(9,3,5));



// round 
console.log(Math.random());  // ye hume 0 se 1 k bich mai value dega
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


//Q-> find the numbers between the given range
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
