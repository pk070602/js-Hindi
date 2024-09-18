const accountId=12345   //const mtlb fix kr diya hai
let accountEmail="priyanshuakashyap070602@gmail.com"
var accountPassword="1234"
accountcity ="Jaipur"    // ye method glt hai declare krna hai per aise bhi kr skte hai 

// accountId=1234;  //not allowed Nodejs can't excute this

accountEmail="h#h@.com"
accountPassword="2121"
accountcity="bikaner"   // ye define krne ka tarika glt hai per dhyan rkhna hai aisa bhi ho skta hai

let accountstatus;    

console.log(accountEmail)

// log ka alternate hai table  isme hum saari chiz ek sath print krwa skte hai
console.table([accountId,accountEmail,accountPassword,accountcity,accountstatus])

// prefer not to use var because of issue in black scope and functionalscope