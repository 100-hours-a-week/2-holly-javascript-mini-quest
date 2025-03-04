const add=(num1,num2)=>num1+num2;
const sum=add(2,3);
console.log(sum);

const sumArray = (array)=>{
    let total = 0;
    array.forEach(element => {
        total+=element;
    });
    console.log(total);
};
sumArray([1,2,3,4,5]);