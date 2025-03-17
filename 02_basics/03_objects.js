// singleton
// object create krne k liye object.create ka bhi use krte h

// phle hum object literals 

const mySym = Symbol("key1")

const JsUser = {
    
     name : "ishika" ,
     "full name " : "ishikaahlawat",
    age : 20 ,
    [mySym] : "mykey1", // square bracket lagane se data type jo actually m  symbol ka hota h vhi aaata h
    loaction : "jammu" ,
    email : "ishika@google.com" ,
    isLoggedIn : false ,
    
}
// these are methods to print them 
console.log(JsUser.email) 
console.log(JsUser["email"]) 
// for accesing full name variable we have to use only [""] this syntax

 //console.log(JsUser.full name)  // showing error
 
// console.log(JsUser["full name"]) ;
// console.log(JsUser[mySym]) ;
// console.log(typeof JsUser.mySym) 

JsUser.email = "ishika@chatgpt.com" 
 // Object.freeze(JsUser)  // freeze lagane k baad wali values propgate ni hongi
JsUser.email = "hitesh@microsoft.com"
 //console.log(JsUser);

 JsUser.greeting = function() {

    console.log("Hello JS user") ;
 }

console.log(JsUser.greeting()) ;

console.log(JsUser.greeting()) ;
console.log(JsUser.greetingTwo()) ; 
 



