
// falsy values 

 //false , 0 , -0 , BigInt 0n , "" , null , undefined ,NaN 

// truthy values : "0" , "false" , " " , [] , {} , function(){}

// some more exampless of truthy values 

// if(userEmail.length === 0) {

//     console.log("array is empty") ;

// }


// const emptyObj = {} 
// if(Object.keys(emptyObj).length === 0) {

//     console.log("object is empty") ;

// }

// some results we have to remember 

// false == 0 , output - true 
// false == ' ' , true 
// 0 == ' ' true 

// nullish coalscing operator (??) : null undefiend // ko separte kren k liye 

 //The ?? operator is used to safely provide a default value when a variable might be null or undefined.


// let result = a ?? b;
// If a is not null or undefined, result will be a.

// If a is null or undefined, result will be b

// let val1 ;

// val1 = null ?? 10 

// console.log(val1) ;

// val1 = null ?? 10 ?? 20


// terinary operator 

// condition ? true : false 

const iceTeaPrice = 100 

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80") ;