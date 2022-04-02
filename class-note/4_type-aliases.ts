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

/*
타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.

타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부다. 인터페이스는 확장(extends)이 가능한데 반해 타입 별칭은 확장이 불가능하다. 따라서 가능한한 type 보다는 interface 로 선언해서 사용하는 것이 좋다.
*/