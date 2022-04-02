// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

// interface 와 type 각각 선언 후 var myValue: Person 마우스 호버 시 다르게 확인됨
var myValue: Person = {
  name: '수',
  age: 100
}

type myString = string;
var str: myString = 'hello';

// interface 대신 type 별칭을 사용한 함수
type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}