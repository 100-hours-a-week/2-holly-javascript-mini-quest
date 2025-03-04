### 자바스크립트 코드가 웹 페이지에서 어떻게 실행되는지 간단히 설명하세요. 
#### 자바스크립트 엔진이 이 과정에서 어떤 역할을 하는지 설명에 포함.  
**자바스크립트 파싱과 실행**은 브라우저의 렌더링 엔진이 아닌 자바스크립트 엔진이 처리한다. 자바스크립트 엔진은 자바스크립트 코드를 파싱하여 cpu가 이해할 수 있는 저수준 언어로 변환하고 실행하는 역할을 한다. 자바스크립트 엔진은 구글 크롬과 node.js의 v8, firefox의 spidemonkey, safari의 JavaScriptCore등 다양한 종류가 있고 모든 자바스크립트 엔진은 ECMAScript사양을 준수한다.   
렌더링 엔진으로부터 제어권을 넘겨받은 자바스크립트 엔진은 자바스크립트 코드를 파싱하기 시작한다. 렌더링 엔진이 html, css를 파싱하여 dom, cssom을 생성하듯이 자바스크립트 엔진은 자바스크립트를 해석하여 **AST(abstract syntax tree)**를 생성한다. 그리고 AST를 기반으로 인터프리터가 실행할 수 있는 중간 코드인 **바이트코드**를 생성하여 실행한다.


- 토크나이징  
단순한 문자열인 자바스크립트 소스코드를 **lexical analysis**하여 문법적 의미를 갖는 코드의 최소 단위인 **token**으로 분해한다.  

- 파싱  
토큰들의 집합을 syntactic analysis하여 AST를 생성한다. AST는 토큰에 문법적 의미와 구조를 반영한 트리 구조의 자료구조이다. (AST는 인터프리터, 컴파일러에서만 사용되는 것은 아니고 typescript, babel, prettier등의 transpiler를 구현하는 데 사용될 수도 있다.)  


- 바이트코드 생성과 실행  
파싱의 결과물로서 생성된 AST는 인터프리터가 실행할 수 있는 중간 코드인 바이트코드로 변환되고 인터프리터에 의해 실행된다.  
참고로 v8엔진은 자줒 사용되는 코드는 TurboFan이라고 불리는 컴파일러에 의해 optimized machine code로 컴파일되어 성능을 최적화한다. 만약 코드의 사용 빈도가 적어지면 다시 deoptimizing하기도 한다.  


### 1. let 키워드를 사용한 변수의 호이스팅 확인하기  
console.log(messageLet); // ReferenceError: Cannot access 'messageLet' before initialization  
let messageLet = "Hello with let!";  

  
### 2. const 키워드를 사용한 변수의 호이스팅 확인하기  
console.log(messageConst); // ReferenceError: Cannot access 'messageConst' before initialization  
const messageConst = "Hello with const!";  


### 3. 화살표 함수의 호이스팅 확인하기  
console.log(greet()); // ReferenceError: Cannot access 'greet' before initialization  
const greet = () => "Hello, Arrow Function!";  
​ 
#### let 키워드를 사용한 변수, const 키워드를 사용한 변수, 화살표 함수의 호이스팅 

선언은 끌어올려지지만, TDZ(Temporal Dead Zone)에 갇혀 초기화 전에는 접근 불가.  
**함수 표현식**은 변수에 할당되는 값이 함수 리터럴이고 할당문이 실행되는 시점에 평가되어 함수 객체가 됨. 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생함.  