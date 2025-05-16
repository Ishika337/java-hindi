
// map k liye dekte same previous rules 



// THIS METHOD IS CALLED CHAINNING where we can apply one or more than one operations 
const nums = [1,2 ,3,4,5,6,7] 

 const newnum = nums.map((num) => num*10).map((num) => num+1).filter((num) => num > 50)

console.log(newnum) ;


