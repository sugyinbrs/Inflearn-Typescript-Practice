// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

// 타입의 장점을 살리면서 다양한 타입을 넣을 수 있는 방안 -> OR(|) 연산자 사용
var sena: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toExponential(); // number에 대한 API 나 속성을 프리뷰에서 바로 사용할 수 있게 됨, 유니온 타입의 장점
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
} // 위와 같은 과정은 '타입 가드' 라고 함, 특정 타입으로 타입의 범위를 좁혀나가는 (필터링 하는) 과정
logMessage('hello');
logMessage(100);

// Union Type -> 위와 같이 하나의 타입 이상을 사용할 수 있게 하는 타입

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   someone.name
//   someone.skill
//   someone.age  
// }

/*
someone 을 함수 내부에서 선언하면 접근할 수 있는 속성(메서드) 프리뷰로 공통 속성인 name 만 뜨는 것을 확인 할 수 있음

기존에 배운 대로라면 Developer 와 Person 에서 제공하는 모든 속성(name, skill, age) 에 접근할 수 있으리라 생각할 수 있음

skill 이나 age 는 type safe 하지 않은 속성이라 에러가 날 수 있다고 인식,
항상 인터페이스처럼 여러가지 Union Type 공통된, 보장된 속성에 대해서만 제공함
*/

function askSomeone(someone: Developer & Person) {
  someone.name
  someone.skill
  someone.age
}

/*
someone 을 함수 내부에서 선언하면 접근할 수 있는 속성(메서드) 프리뷰로 모든 속성(name, skill, age)이 뜨는 것을 확인 할 수 있음

AND(&) 연산자를 사용한 인터섹션 타입은 Developer 와 Person 에서 제공하는 모든 속성(name, skill, age)에 접근할 수 있음
*/

// var sean: string | number | boolean;
// var nat: string & number & boolean; // 모든 type 이 만족하는 하나의 type 을 의미하는 것이 인터섹션 타입