
function sayMyName(){

console.log("i");
console.log("s");
console.log("h");
console.log("i");
console.log("k");
console.log("a");

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
    console.log("please enter username")
  }

    return '${username} just logged in' 
}

console.log(loginUserMessage("ishika")) ;
console.log(loginUserMessage()) ;