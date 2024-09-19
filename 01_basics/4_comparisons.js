//basics conversions (inka answer hmesh 0 and 1 mai aata hai)
console.log(2>1);
console.log(2==1);
console.log(2<1);
console.log(2!=1);


// differnt data types comaprison ( avoid kro aise comparison krne se)
console.log("2">1);           // yha per is time wo string ko num mai comparison kr dega phir us hisab se answer de dega
console.log("02">1)

// strict check (we use '===')
console.log("2"===2);   // eis time isko pta chl jayega ki ye different data types hai esliye wo pahle hi false de dega


//  eis case mai null ko wo as a zero maan leta hai
console.log(null>0);
console.log(null==0);
console.log(null>=0);

//Note==> equality check (==) and comarison check mai frk aa skta hai (>,<, >=, <=)

// undefined case mai answer hmesha false aata hai
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
