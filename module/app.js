// 1번
// import { add } from "./math.js";
// console.log(add(2,3));
 
// 2번
import {add, subtract} from "./operations.js";
import User from "./userProfile.js";

// add, subtract 함수 사용
console.log("Addition:", add(3, 1));        // 15
console.log("Subtraction:", subtract(3, 1)); // 5

// User 클래스 사용
const user = new User("holly", 22);
console.log(user.getProfile()); 