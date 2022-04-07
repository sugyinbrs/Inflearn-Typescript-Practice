function Person(name, age) {
  this.name = name;
  this.age = age;
}
var sugy = new Person('수', 100);

// ES 2015 (ES6)부터 소개 된 문법

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}
var sue = new Person('수', 100); // 생성 되었습니다.
console.log(sue);
// 클래스에 넘긴 속성들('수', 100)로 하여금 Person 이라는 객체가 생겨나게 됨

/*
위에 function 으로 작성된 함수 코드와 아래 class 함수 코드는 동일하다.

기존 ES6 즉, 2015년 전에 제공했던 문법들로도 Prototype 을 이용한 생성자 함수로 상속을 구현할 수 있었다.

그런데 객체 지향 언어에 익숙한 개발자들이 자바스크립트에 접근하기 수월하도록 class 기반의 문법을 제공하였다.

class 를 Babel 등으로 돌려서 보면 실질적으로 생성자 함수를 사용했다는 것을 알 수 있다.

자바스크립트 언어 즉, Prototype 기반으로 코딩하는 언어의 특성은 class 로 문법이 바뀌었다고 해도 바뀌지 않기에 Prototype 기반의 상속이 유지가 된다. 기존 문법으로 작성 가능한 생성자 함수는 class 를 사용하지 않고도 계속 사용할 수 있다.
*/