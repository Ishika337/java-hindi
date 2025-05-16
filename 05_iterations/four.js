
// const coding = ["js" , "ruby" , "java "] ;

// const values = coding.forEach((item) => {

//     console.log(item) ;
//     return item ;

// })

// console.log(values) ; it will not return any values 



// we use filter to return values  , values return k case m kuch print ni hota but code run kr jata h 


// const nums = [1,2,3,4,5,6,7,8,9,10] 

// const newnum = nums.filter((num) => num>4) 

// console.log(newnum) ;

// in case of filter we gave it a call back function here we given arrow function as call back function a
 //then we give a conditon and usko cond. ko satisfy krne wali values print hongi then 



const nums = [1,2,3,4,5,6,7,8,9,10] 

// const newnum = nums.filter((num) => {num>4

// // so in this case we have to manulay retrn the values 
// return num>4
// }) 

//console.log(newnum) ;// in this case it will give error as we defined the cond. inside the scope outside this scope it will not give any value 


/// if we want to use the same with foreach then we have to modify it with some new things like 


// let see some xamples 


const books  = [ 
    {
tittle : 'book one' , genre : 'fiction' , publish : '1981', edition : 2004
},
   {
tittle : 'book two' , genre : ' Non-fiction' , publish : '1992', edition : 2008
},
   {
tittle : 'book three' , genre : 'history' , publish : '1999', edition : 2007
},
   {
tittle : 'book four' , genre : ' Non-fiction' , publish : '1989', edition : 2010
},
   {
tittle : 'book five' , genre : 'science' , publish : '2009', edition : 2014
},
   {
tittle : 'book six' , genre : 'fiction' , publish : '1987', edition : 2010
},
   {
tittle : 'book seven' , genre : 'history' , publish : '1986', edition : 1996
},
   {
tittle : 'book eight' , genre : 'history' , publish : '2011', edition : 2016
},
   {
tittle : 'book nine' , genre : ' non-fiction' , publish : '1981', edition : 1989
},

];

let userbooks = books.filter( (bk) => bk.genre === 'history') 

userbooks = books.filter((bk) => { return bk.publish >= 2000  && bk.genre ==='history' }) // we have to maually return 

console.log(userbooks) ;
