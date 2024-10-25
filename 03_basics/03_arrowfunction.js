//example1--->  this keyword ka use

/*const user={
    name:"priyanshu",
    price:999,
    welcome:function(){
        console.log(`${this.name},welcome to the website`);  // this jo hai wo current context ko refer krta hai
       //agr simple name likh deta this k bina tho wo sahi nhi hota
    }
}
user.welcome();  // parathesis lgyaenge tho ye method bn jayega iski help se hum output show kr payenge
use.welcome  // agr sirf ye likhte hai tho sirf function call hota hai

*/


//example 2-->

/*const user={
    name:"priyanshu",
    price:999,
    welcome:function(){
        console.log(`${this.name},welcome to the website`);  // this jo hai wo current context ko refer krta hai
       //agr simple name likh deta this k bina tho wo sahi nhi hota
    }
}
user.welcome();  // parathesis lgyaenge tho ye method bn jayega iski help se hum output show kr payenge
user.welcome  // agr sirf ye likhte hai tho sirf function call hota hai

// ab context bdl dete hai name ka
user.name="himanshu";
user.welcome();   // yha per change kra hua name print hoga  */


//example 3--->   andhar wala console.log(this);  ye jb print krenge tho wo object k baare mai saari details bta dega

/*const user={
    name:"priyanshu",
    price:999,
    welcome:function(){
        console.log(`${this.name},welcome to the website`);  // this jo hai wo current context ko refer krta hai
       //agr simple name likh deta this k bina tho wo sahi nhi hota
       console.log(this);  // agr sirf yha per this likhte hai tho wo sari chiz bta dega object k context ki
    }
}
user.welcome();    //  ye likhenge tho wo hume saari value mil jayegi (console.log(this)) ki help se */


//example 4--->  ab bahr wala console.log(this) print krenge tho ye output dega {} (empty) kuki is wqt hum node environment k andhar hai aur ye refer krega ek empty object ko

/*
const user={
    name:"priyanshu",
    price:999,
    welcome:function(){
        console.log(`${this.name},welcome to the website`);  // this jo hai wo current context ko refer krta hai
        console.log(this);
    }
}

console.log(this);  // output empty aayega {}   */

// Note--> browser k andhar global object hai wo window object hai (jb browser k andhar jaa kr hum inspect per click krenge aur usme console.log(this) likhenge tho hume mil jayega window objects)



// Arrow function

//example 1-->

function chai(){
    console.log(this);
}

chai();   // agr ye nhi likhunga tho only function call hoga ag likh denge chai(); tho hume bhut saari details mil jayegi 



//example 2---->

function hai(){
    let username="hitesh";
    console.log(this);
}

hai();   // is time per bhi same example 1 ki trh hi details aa jayeig kaafi saari


//example 3---> 
function  hi(){
    let us="priyanshu";
    console.log(this.us); // output undefined aayega (mtlb function k andhar ye funda kaam nhi krta ,object k andhar hi chl skta hai ye)
}

hi();


//example 4-->   ek aur tarika functions ko declare krne ka
const hip=function(){
    let usernam="likhay"
    console.log(this.usernam);  //same output aayega above example ki trh
}

hip();

//example 5--> arrow function 
const hyp=()=>{
    let usernam="likhay"
    console.log(this.usernam);  //same output aayega above example ki trh
}

hyp();

//exaple--> 6

const hyp1=()=>{
    let usrnam="likhay"
    console.log(this);  //output empty aayega {} 
}

hyp1();


// question --> difference between fucntion and arrow function



// explicit arrow function example --> isme hume return  key word likhna padta hai 

const hp=(temp1,temp2)=>{
    return temp1+temp2;
}

console.log(hp(9,4));


// for one line statement we don't need return keyword


const hp1=(temp1,temp2)=>  temp1+temp2;


// implicit example---> parathaseis mai return  word nhi likhna padega

const hp2=(temp1,temp2)=> (temp1+temp2)


// return an object   in arrow fucntion parathesis lgana padega

const hp4=(temp1,temp2)=>({us:"naaa"})