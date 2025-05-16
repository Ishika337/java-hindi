
// REDUCE METHOD 


const num  = [1,2,3] 

// const total = num.reduce(function (acc , currval) {

//     console.log(`acc: ${acc} and currval : ${currval}`) ;

//     return acc + currval 
// } ,0) // yha se hum ititalvalue pass krte h


// we try now with the arrow function 


// const total = num.reduce((acc, curr) => acc+ curr , 0)

// console.log(total)



const cart = [

    {
        itemname : "js course" ,
        price : 2999 
    },
       {
        itemname : "py course" ,
        price : 999 
    },
       {
        itemname : " ai course" ,
        price : 3999 
    },
] ;


const payprice = cart.reduce((acc , item) => acc + item.price ,0) 

console.log(payprice) ;
