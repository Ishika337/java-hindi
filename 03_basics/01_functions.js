
function sayMyName(){

// console.log("i");
// console.log("s");
// console.log("h");
// console.log("i");
// console.log("k");
// console.log("a");

}
sayMyName() // saymyname is reference here and () it is exceution

// function addTwoNumbers(nums1 , num2){

//    console.log(nums1 + num2) ;
// }


function addTwoNumbers(nums1 , num2){

    let result = nums1 + num2 
    return result ;
    console.log("ishika") // after return kuch kaam ni krta h but before it will work
 return num1 + num2 // or can directly use this
 }
 
//addTwoNumbers(3 , null) 
 const result = addTwoNumbers(3 , null) 
console.log("result :" , result) ; // isse value print hoti h na ki return 
// doing this we get return value undefined 


function loginUserMessage(username) {
  if(username === undefined)
  {
   // console.log("please enter username")
  }

    return '${username} just logged in' 
}

// console.log(loginUserMessage("ishika")) ;
// console.log(loginUserMessage()) ;


// function calculateCartPrice(num1) {

//   return num1
// }

// console.log(calculateCartPrice(200 , 400)) ; // if we want toaceess all the items written inside then we have to use spread/rest(...) operator



// function calculateCartPrice(...num1) {

//   return num1
// }

// console.log(calculateCartPrice(200 , 400)) ;


function calculateCartPrice( val1 , val2 ,...num1) {

  return num1
}

 //console.log(calculateCartPrice(200 , 400 , 2000 , 500)) ;


const user  = {

  username : "hitesh" ,
  price : 199 
}

function handleObject(anyobject){

  console.log('Username is ${anyobject.username} and price is ${anyobject.price} ') ;
}

 //handleObject(user) 

 handleObject ({

  username : "sam" ,
  price : 399
 })

 const myNewArray = [200 , 400 , 100 , 600]

 function returnSecondValue(getArray) {

  return getArray[1]
 }

 //console.log(returnSecondValue(myNewArray)) ;
 console.log(returnSecondValue([200 ,400 , 500])) ;
