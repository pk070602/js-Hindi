//strings

// how to declare a sting 
// type 1
const name="priyanshu";
const repocount=40;

//type 2
const gameName=new String("HHitesh");
//console.log(name + repocount + "value");    // aisa likhna sahi nhi hai avoid kro isko likhne se

// we use backticks  or string interpolation ( jisme  hum placeholder bnate hai jisme hum koi bhi varriable inject kr skte hai)

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  // ye sahi tarika hai likhne ka

// master kr lo methods ko string mai tho kaafi easy rhega aane wali chize
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));       // isme char konse number per present hai wo pta chl skta hai
 
const newString=gameName.substring(0,4);    // last wala 4 nhi count hoga 3 tk hi jayenge
console.log(newString);       

const anotherString=gameName.slice(-4,4);  // slice mai negative value de skte hai  , substring mai nhi de skte hai 
console.log(anotherString);

const myyyName="    Hitesh ";   // hitesh k bich mai agr gap hoga tho wo remove nhi hoga
console.log(myyyName.trim());

const url="https://hitesh.com//hitesh%20choudhary"

console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));   // include se pta chlta hai ki wo word sach mai present hai ya nhi

// split method use
const nume=new String("ch uti ya");  
console.log(nume.split(' '));   //space k basics per split kra hai,(hum kisi bhi basics per split kr skte hai)