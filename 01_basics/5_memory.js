//memory---> stack (primitive), Heap (non primitive)

//example--1;
let myYoutube="Priyanshcodez";
let anothername=myYoutube;
console.log(anothername);

//example 2

let myChannel="priyanshk";
let anotherChannel=myChannel;
anotherChannel="pikaaashow";
console.log(anotherChannel);
console.log(myChannel);


let user1={
    email: "priyanshk@gmail.com",
    upi : "user@ybl",
}

let user2=user1;

//dot use krke hum acess kr skte hai
user2.email="hitesh@gmail.com";  // jb kuch change krenge tho wo original value mai change hoga
console.log(user1.email);
console.log(user2.email);