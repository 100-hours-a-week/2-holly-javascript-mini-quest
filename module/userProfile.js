class User{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    getProfile(){
        return `name: ${this.name}, age: ${this.age}`;
    }
}
export default User;