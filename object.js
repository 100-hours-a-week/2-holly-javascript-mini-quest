//ctrl + option + n


const myPet={
    name: "Momo",
    type: "Cat"
}
console.log(myPet.name, myPet.type)
 
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    } 

}
const person= new Person("Jane Doe",25);
person.greet();
