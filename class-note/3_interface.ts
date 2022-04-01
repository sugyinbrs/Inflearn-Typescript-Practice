/*
interface 장점
1) 반복되는 type 들에 대해 하나의 interface 로 정의 가능
2) 오탈자가 나는 것을 방지
3) 상호 약속한 규칙에 따라 속성의 type 을 정의하고 사용
*/

interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const sena: User = {
  age: 30,
  name: '세나'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const sue = {
  name: '수',
  age: 100
}
getUser(sue);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}
var arr: StringArray = ['a', 'b', 'c'];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
// obj['cssFile'] = 'a' // RegExp 이 아닌 String 형태로 값을 할당하였기에 오류

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var sugy: Developer = {
  language: 'ts',
  name: '수',
  age: 100
}