//Dates

let myDates=new Date();
console.log(myDates);              // ye wala jyada readable nhi hota
console.log(myDates.toString());   // ye wala acha hota hai compare than normal se
console.log(myDates.toDateString());   // ye aur better hota hai
console.log(myDates.toLocaleString()); // ye aur bdiya hota hai


// interview question
console.log(typeof myDates);    // eiska type of object hai ye important question hai

//create a specific date (Note---> month hmesh 0 se start hota hai)
let myCreatedDate=new Date(2023, 0 , 24);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleDateString());

// create a specific date with time
let mySpecifiedDate=new Date(2024, 5 , 7, 5 , 3 )
console.log(mySpecifiedDate.toString());
console.log(mySpecifiedDate.toDateString());
console.log(mySpecifiedDate.toLocaleString());
console.log(mySpecifiedDate.toLocaleDateString());

// create a date of birth
let myDate=new Date("2023-01-14");   // YYYY-MM-DD  // yha per month 1 se start hota hai yha per double digit mai likh rhe hai na 
console.log(myDate.toLocaleDateString());

// in india we follow  // MM-DD-YYYY
let myNewDate=new Date("01-07-2024");
console.log(myNewDate.toString());
console.log(myNewDate.toDateString());
console.log(myNewDate.toLocaleDateString());
console.log(myNewDate.toLocaleString());


//timestamp
let myTimeStamp=Date.now();
console.log(myTimeStamp);       // isme hume value milegi wo value miliseconds mai hogi 

// we can compare the time stamp also
console.log(myCreatedDate.getTime());

//milisecond timestamp ko seconds mai kaise bdle (INTERVIEW Questions)
console.log(Math.floor(Date.now()/1000));  // decimals na aaye esliye humne yha floor use kra hai


//some important methods of date
let myNEwDate=new Date();
console.log(myNEwDate);
console.log(myNEwDate.getMonth()+1);
console.log(myNEwDate.getDay());

// backticks ka use bhi kr skte hai
console.log(`my story is very interseting and my nirthday date is ${myNEwDate.getDay()} and the current month is ${myNewDate.getMonth()+1}`)

// One important method( tolocalstring --> eisme hum modify bhi kr skte hai format ko)

myNEwDate.toLocaleString('default',{
    weekday:"long",
})
