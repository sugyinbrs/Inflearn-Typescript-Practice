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