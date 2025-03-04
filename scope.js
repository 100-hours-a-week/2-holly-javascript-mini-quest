let temperature = 25;
temperature=30;

const MAX_TEMPERATURE = 35;
//MAX_TEMPERATURE = 50; //TypeError: Assignment to constant variable.


if(true){
    let isRaining=true;
}
console.log(isRaining); // ReferenceError: isRaining is not defined

/*
코드에서 isRaining 변수는 블록 스코프(block scope)를 갖는 let으로 선언되었다. isRaining은 if 블록 내부에서만 유효하다.
{} 블록 내부에서만 접근할 수 있고, 블록을 벗어나면 참조할 수 없다.
*/

/*
스코프의 한계 해결방법 
1️⃣ 블록 외부에서 변수를 선언하기 (전역 또는 함수 스코프)
변수를 if 블록 바깥에서 선언하면, 블록 내부에서도 접근할 수 있다.

let isRaining; 

if (true) {
    isRaining = true;
}

console.log(isRaining); 


2️⃣ var 사용하기 (함수 스코프)
var는 블록 스코프가 아니라 함수 스코프(function scope)를 가지므로, if 블록 내부에서 선언해도 바깥에서 접근할 수 있다.

if (true) {
    var isRaining = true;
}

console.log(isRaining); 
var는 함수 내부가 아닌 경우 전역 변수가 되므로, 오염 위험이 있어 가급적 let이나 const를 사용하는 것이 좋다.

3️⃣ 함수로 감싸서 반환하기 (클로저 활용)
만약 변수를 직접 노출하지 않고 캡슐화하고 싶다면, 함수를 사용하여 값을 반환할 수도 있다.

function checkWeather() {
    if (true) {
        let isRaining = true;
        return isRaining;
    }
    return false; // 기본값 설정
}

console.log(checkWeather());   

isRaining을 직접 노출하지 않음 → 외부에서 변수 접근이 불가능
필요한 경우에만 값을 제공 → 캡슐화된 방식으로 관리 가능

*/
