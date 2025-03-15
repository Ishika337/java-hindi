// Dates 

let myDate = new Date()
console.log(myDate.toString()); // convert into readable format with time zone

console.log(myDate.toDateString()); // not print date not time zone 
console.log(typeof myDate) ; 

//let myCreatedDate = new Date(2023 , 0 , 23) // month start from 0

// let myCreatedDate =  new Date(2023 , 0 , 23 , 5 , 3)


//console.log( myCreatedDate.toLocaleString()) ;

// some other methods

let myCreatedDate = new Date("01-14-2023") 
 //console.log(myCreatedDate.toLocaleString());

 //let myTimeStamp = Date.now() 

 //console.log(myTimeStamp) ;  // give number in decimal 
 //console.log(myCreatedDate.getTime()) ;

// console.log(Math.floor(Date.now()/1000)) ; // by this we get without decimal

 let newDate = new Date() ;
 console.log(newDate);

 console.log(newDate.getMonth());
 console.log(newDate.getDay());

newDate.toLocaleString('default' , {
    weekday : "long"
})








