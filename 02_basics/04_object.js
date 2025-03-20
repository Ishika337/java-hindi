// const tinderuser = new object()  

const tinderUser = {} 

 tinderUser.id = "123abc" 

 tinderUser.name = "sammay" ;
 tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {

    email : "some@gmail.com" ,
    fullname : {
        userfullname : {

            firstname : "hitesh" ,
            lastname : "chodary" 
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname) ;
// we can create object inside a object then we can acces any thing using these keywords

const obj1 = {1: "a" , 2 : "b"} 
const obj2 = {3 : "a" , 4 : "b"}

 //const obj3 = {obj1 , obj2}
 
//console.log(obj3) ; // dono ko merge kr dega 
// assign wale method m pheli term source hoti h baki k sare target hote h
 //const obj3 = Object.assign({} , obj1 , obj2) 

//console.log(obj3) ;

// but we generally use 

const obj3 = {...obj1, ...obj2} 
console.log(obj3) ;

// object may contain multiple objects inside them 
const users = [

    {
        id : 1 ,
        email : "ishika@google.com" ,
    } ,

    {

    } ,

    {

    }

]

users[1].email 
 //console.log(tinderUser) ;

//  console.log(Object.keys(tinderUser)) ;
//  console.log(Object.values(tinderUser)) ;
//  console.log(Object.entries(tinderUser)) ; // remember that we get ouput in the form of arrays

//  console.log(tinderUser.hasOwnProperty('isLoggedIn')) ;// check that certain property lies or not 

 
const course  = {

    coursename : " js in hindi" ,
    price : "999" ,
    courseInstructor : " hitesh"
}

// destructure of objects  mtlb  hum apne hisab se varibles  ko naam de skte h

const { courseInstructor} = course 
 
 console.log(courseInstructor) ; // direct bhi kr skte h 
const { courseInstructor : instructor} = course 
console.log(instructor) ; // ya koi aur naam deke bhi kr skte h

// {
//     "name" : "hitesh" ,
//     "coursename" : "js in  hindi" ,     in json we doesnt gaive name to an object
//     "price" : "free"
// }


// similarly hum arrays ko bhi destructue kr skte h like objects 




