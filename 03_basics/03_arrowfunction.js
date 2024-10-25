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


//example 3--->
const user={
    name:"priyanshu",
    price:999,
    welcome:function(){
        console.log(`${this.name},welcome to the website`);  // this jo hai wo current context ko refer krta hai
       //agr simple name likh deta this k bina tho wo sahi nhi hota
       console.log(this);  // agr sirf yha per this likhte hai tho wo sari chiz bta dega object k context ki
    }
}
user.welcome();  
user.welcome  

//example 4---> 


