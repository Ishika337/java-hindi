


// this is refered as for of loop  see the synatx useful
// let arr = [1,2,3,4,5] 
// for(const num of arr) {

//     console.log(num) ;
// }


// for strings 

const greetings = "hello world!" 

for(const greet of greetings) {

   // console.log(`each char is ${greet}`) ;
}

// maps 

const map = new Map() 
map.set('IN' ,"India")
map.set('FR' ,"france")
map.set('Ar' ,"Australia") 
map.set('IN' ,"India")

 // console.log(map) ; will always give unique value pairs

//  for(const key of map) {

//     console.log(key) ;
//  }


 for(const [key , value] of map) {

   // console.log(key , ':-' , value) ;
 }


 // in case of objects lets chcek it is iteratible aur not 

 const object = {

    'game1' : 'nfs' ,
    'game2': 'ff' 
 }
for(const [key , value] of object) {

    console.log(key , ':-' , value) ; 
}
 
// no it will not 