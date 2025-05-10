
// let a = 10 
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);
let a = 300
if(true) {

let a = 10 
const b = 20
var c = 30
// console.log("inside :" , a) ;
}

// console.log(a); // a will not print as it scope is only inside if
// console.log(b); // similarly for b
 //console.log(c); // var cant be used as we scope it into if but it is running outside also



function one() {

    const username = "ishika"

    function two(){

        const website = "youtube" 
        console.log(username) ;

    }
   //  console.log(website) ; // cannot use as it is out of scope so gives error 

     two() 
}
one()

// so if website hi run ni ho pa rha toh baki k bhi ni hinge 


if (true){

    const username = "ishika"

    if(username == "ishika") {

        const website = "youtube"
        console.log(website+ username);
    }

    console.log(website) ;
} // as we are trying it outside the scope

 //console.log(username);

// ++++++++++++++interseting ++++++++++++++++

 //  can write anywhere addone(5)
function addone(num) {

    return num +1 

}

addone(5)

// one more way of decelration  called expression type

const addTwo = function(num){

    return num + 2

}
// only write after variavle decleraction
addTwo(5)


