// array

const myArr = [0 , 1,2 ,3]
const myHeros = ["salman" , "ravbir"] 

const myArr2 = new Array(1 ,2 ,3 ,4) // another mthod for declaring

 //console.log(myArr[0]) ;

// array method 

// myArr.push(6) ;
// myArr.push(8) ;
// myArr.push(7) ;
 //myArr.pop() ;

 myArr.unshift(9); // 9 ko yh starting m place kr dega
 myArr.shift(); // same elemnt ko remove kr dega
 
//  console.log(myArr.includes(9)) ;
//  console.log(myArr.indexOf(9)) ;

// const newArr = myArr.join() 
//  console.log(myArr);
//  console.log(newArr); // converts into string 

 // slice , splice 

 console.log("A" , myArr) ;

 const myn1 = myArr.slice(1,3) 

 console.log(myn1);

 console.log("B" , myArr) ;

 const myn2 = myArr.splice(1,3) // includes 3 also print from 1to 3
 console.log(myn2) ;


