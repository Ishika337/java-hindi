

// primitive data type
// 7 types string number , boolean , undefined , symbol, bigint




// refernece or non primitive


// array , objects , functions 

const hero = ["shaktiman" , "doga"] ;

let myObj = {

    name : " ishika",
    age : 20 ,
}


const myFunction = function(){

    console.log(" hello world")
}


// type janne k liye 

console.log(typeof (anyvariablename)) ;



// ++++++++++++++++++++++++++++++++++++++

// about memory

// stack (primitive)  and heap (non primitive)

let myName = "ishika"
let anothername = myName 

anothername = "chaiorcode"

console.log(myName);

console.log(anothername);

let userOne = {


    email : "user@google.com",

    upi : "user@ybl",

}

let userTwo = userOne 
userTwo.email = "hitesh@google.com" 

console.log(userOne.email);

console.log(userTwo.email);