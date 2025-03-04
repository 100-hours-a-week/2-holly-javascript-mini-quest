const arr=[1,2,3,4,5];

const result1=arr.reduce((acc,cur,arr)=>acc+cur,0)
console.log(result1);


const result2= arr.map(item => 2*item);
console.log(result2);