function createCounter(){
    let count=0;
    const increment=()=>{count++};
    const decrement = ()=>{count--;};
    const getCount = ()=>{return count;};

    return {increment, decrement, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());//2

counter.decrement();
console.log(counter.getCount());//1


function messageMaker(string){
    return function makeMessage(anotherString){
        return string+anotherString;
    };
}
const msgMaker = messageMaker("hi, my name is ");
console.log(msgMaker("gildong"));