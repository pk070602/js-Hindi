//objects 
// we can declare object by two methods 1)with the help of constructor    2) with the help of literals

// concept of singleton----> 1)literal ki trh declare krte hai tho singleton nhi bnta   2) constructor ki help se declare krte hai to bnta hai

// object.create  ----> ye jo hai ye hota hai constructor isko baad mai dekhenge

// objects Literals
const Jsuser={
    name:"priyanshu",
    age:22,
    "full name":"priyanshu Kashyap",
    email:"priyanshuk0706@gmail.com",
    isloggedIn:false,
    lastloggedIn:["Monday","Saturday"]
}

// Note--> key and value do hi chiz hoti hai objects mai
// value right side wali and key left side wali hoti hai
// value can be string,boolean,object,array etc. ho skti hai

// access krne ke do tarike hai object ko  (. and square bracket)
console.log(Jsuser.email);
console.log(Jsuser["email"]);   // double quotes lgane padenge  
console.log(Jsuser["full name"]);


//Q->declare symbol into key and print
const my_type=Symbol("key1");
const Jsuser1={
  //  my_type:"mykey1",            // ye glt tarika hai declare krne ka 
    [my_type]:"mykey1"
}
//console.log(Jsuser1.my_type);           // ye glt tarika hai 
//console.log(typeof Jsuser1.my_type);    // ye string ko denote krta hai
console.log(Jsuser1[my_type]);         // ye sahi method hai symbol ko declare krne ka
console.log(Jsuser1);  //  ye symbol type hai



//how to update value in object 

Jsuser.email="pk@gmailcom";
console.log(Jsuser);

// we can also freeze the value of object
// Object.freeze(Jsuser);   // eis line k baad ab kuch bhi update krna ho tho wo nhi hoga


// add a function into object
Jsuser.greeting=function(){
    console.log("hello js user");
}

console.log(Jsuser.greeting);     // this give output "undefind"
console.log(Jsuser.greeting());   // this give output jo humne likha tha "hello js user"


// ab object k andhar jo name hai usko access krte hai (string interpolation ki helps se)
Jsuser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());



// ******************************************OBJECTS Part 2(declaration and types)***********************************//

const tinderuser=new Object()        // this is a singleton object 

//console.log(tinderuser);   // ek empty object mil jayega humko {}

// non-singleton object
const tinderuser2={};
tinderuser2.id="22";
tinderuser2.name="Sammy";
tinderuser2.isloggedI=false;

console.log(tinderuser2);


// objects k andher objects
const Myobj={
    name:"Priyanshu",
    fullname:{
        username:{
            pincode:"001",
            country:"INDIA"
        }
    }
}

//console.log(Myobj.fullname);
//console.log(Myobj.fullname.username.pincode);

// we can also use the concept of optional chaining
//suppose agr fullname exist hi nhi krta hu tho us time hum syntax use krte hai [console.log(Myobj.fullname?)]
 

// worst tarika declare krne ka
const obj4={1:"2", 2:"3", 3:"4"};
const ob2={4:"5", 5:"6" , 6:"7"};

//const obb={obj4,ob2};  // ye sahi method nhi hai 

// combine two or more objects
const obj1={1:"2", 2:"3", 3:"4"};
const obj2={4:"5", 5:"6" , 6:"7"};

//const obj3=Object.assign({},obj1,obj2); // ye jyada sahi hai logically (use of "{}")agr hum combine krte hai objects ko 
//const obj3=Object.assign(obj1,obj2);   // ye likhna bhi sahi hai (at the end sara data object 1 mai hi jaa rha hai)
//console.log(obj3);


// when the objects are two and more

const obj11={1:"2", 2:"3", 3:"4"};
const obj21={4:"5", 5:"6" , 6:"7"};
const obj33={4:"5", 5:"6" , 6:"7"};

//const ob44=Object.assign({},obj11,obj21,obj33);

// spread wala method use kr skte hai  (dooot dooot wala)
const obbb={...obj11,...obj21,...obj33};
//console.log(obbb);

//Array of objects( user jb data base se aayenge tho wo array of objects ki form mai aayega)
const Users=[
    {
          id:1,
          email1:"priyansh@gmail.com"
    },
    {
          id:1,
          email1:"priyansh@gmail.com"
    },
    {
           id:1,
          email1:"priyansh@gmail.com"
    },
    {

    },
    {

    },
]

Users[1].email1  // ab access kr skte hai hum array ki trh


// print keys of the tinderuser2 object
console.log(tinderuser2);
console.log(Object.keys(tinderuser2));  // output value ka data type yha per jo milta hai vo hai array(ab is per loop lga skte hai)
// same for values k liye 
console.log(Object.values(tinderuser2));   // output can be occur in the form of array 


//entries method use(bhut km use hota hai)
console.log(Object.entries(tinderuser2));  // hr ek key and value ka ye array mai bna deta hai (array k andhar array bn jata hai)

// hasownproperty method use(basically btata hai ki value exist krti hai ya nhi key ki jo object mai hai)

console.log(tinderuser2.hasOwnProperty('isloggedin'));  //output hmesha boolean mai aata hai




//check for more (inspect mai jaa kr  ---> const obj={1:"2",2:"3"});  // check all prototype and methods(like constructor,...etc)



//*************************************(DESTRUCTURE OF OBJECTS) **************/

const courses={
    coursename:"js in Hindi",
    price:"999",
    courseInstuctor:"hitesh"
}

console.log(courses.courseInstuctor);   // simple method to access the key of an object(per agr bar bar likhna pde ye chiz tho kaafi mushkil ho jayega)

// now extract the value from the object
const {courseInstuctor} = courses;
console.log(courseInstuctor);  // ab bar bar likhne ki jarurat nhi hai courseinstructor

//modify the courseinstructor name 
const {courseInstuctor: instructor}= courses;
console.log(instructor);    


//destructure uses in react (example)
const navbar=({company})=>{    // yha per hum bar bar probs.company use nhi krenge uski jgh {company} desturcture concept use krenge

}
navbar(company = "Hitesh")


// API----> 

// JSON----> representation---->  {}

// JSON example
{
    name:"priyanshu",
    age:"12",            // error esliye show kr rha hai kyki ye object jb bna rhe hote hai tb aisa likhte hai
    price:"Free",

}


// correct example or syntax of js( eisme bs key and value dono string mai hoti hai)

// {
//     "name":"priyanshu",
//     "age":"12",
//     "number":"23",
//     "price":"free"
// }

// randomuser api ---> isko use kr skte hai ek sample api k liye google per search kr lena
//jsonformatter -----> ye use kiya jata hai api ko understand krne k liye


//similar we use array as a json
//declaration of json in array format

[
    {},
    {},
    {},
]
