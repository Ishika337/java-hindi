// for in loop is used in case of objects 

const object = {

    js : "javascript" ,
    cpp : "c++" ,
    rb : "ruby"
}

// for(const key in object){

//     console.log(key) ;
// }


for(const key in object){

  //  console.log(`${key} shortcut is for ${object[key]}`);

}

const arr = ["js" , "rb" , "c++"] 

for(const key in arr) {
 //   console.log(arr[key]) ;

}

// in case of map for in is not iteratible 


//++++++++++++ FOR EACH++++++++++++++++



const brr = ["js" , "c++" , "python"] 
// // basic syntax 
// brr.forEach(function(val){

// console.log(val) ;

// })

brr.forEach((val) =>{

// console.log(val) ;

})

// above we use arrow functions for the same 

// another method 

// function printMe(item) {
//  console.log(item) ;
// }

// brr.forEach(printMe) // apne aap hi print krega sirf hume reference dena h

// foreach not only print the values inside it we can acces the whole array also 

// brr.forEach((item , index , arr) => {

//     console.log(item , index , arr);
// })

const coding = [


    {
        langname : " java" ,
        filename : "js"
    },
     {
        langname : " python" ,
        filename : "py"
    },
     {
        langname : " c++" ,
        filename : "cpp"
    } ,
]

coding.forEach((iteam) => {

    console.log(iteam.langname) ;

})

