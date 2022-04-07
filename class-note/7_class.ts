class Person {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
/*
Typescript 에서는 class 의 최상단에 constructor 의 프로퍼티에 들어가는 멤버 변수를 정의해야한다.

또한 멤버 변수의 유효범위 (스코프) 를 정의할 수 있는데
해당 class 내부에서만 사용할 예정이라면 private 을,
그렇지 않으면 public 을 붙여준다.
readonly 는 읽기만, 접근만 가능하며 실제로 값을 변경할 수는 없다.
*/

// 리액트 기존 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - Hooks 기반의 함수형 코드
function App() {
  return <div>Hello World</div>
}