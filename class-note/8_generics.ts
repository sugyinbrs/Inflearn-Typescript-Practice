// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText('hi'); // 문자열 hi
// logText(true); // 진위값 true

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }
// logText<string>('hi');
// logText 함수를 호출 시 넘길 파라미터(인자)의 타입을 함께 지정하면서 넘길 수 있음
// 프리뷰 -> function logText<string>(text: string): string
// logText('hi') 만 호출 해도 'hi' 인자로 인해 넘겨 받을 타입이 문자열인 것을 자동 추론함
// 파라미터의 타입은 'hi' 라고 하는 문자열이 됨, 반환 역시 문자열

// function logText(text: string) {
//   console.log(text);
//   return text;
// }
// 현재 상태에서 여러 타입을 인자로 받을 수 있는 이유는 타입을 지정해주지 않았기에 암묵적으로 any 로 받는 것으로 설정 되어 있음
// 인자의 타입을 string으로 지정해준다면 문자열의 내장 API 가 제공이 되며 사용할 수 있음
// 예) text.split('').reverse().join('');

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logNumber(10);
// logText(true);
// 위와 같이 다른 타입을 받기 위하여 같은 함수(중복되는 코드를) 반복해서 사용한다면 가독성, 유지보수 관점에서 좋지 않음

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }
// logText('a');
// const myText = logText('a');
// myText.split('');
// logText(10);

// 위와 같은 상황에서는 logText 함수의 반환 값 역시 string 또는 number 가 됨
/*
문제점 1)
함수 내에서 파라미터에 대한 내장 API 를 사용하려고 한다면 string 과 number 가 공통으로 접근할 수 있는 속성이나 API에 대해서만 프리뷰를 제공한다는 것임

문제점 2)
const myText = logText('a'); 로 함수를 호출하여도 myText 의 type 이 여전히 string | number
myText.split(''); 역시 split 에 에러 메세지 (Property 'split' does not exist on type 'number') 가 뜸

결론
- input 에 대한 type 은 해결 되었지만 반환값의 type 은 해결 되지 않아 문제가 생김
*/

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("alphabet");
str.split("");

const login = logText<boolean>(true);
login.valueOf;

/* 제네릭 장점
- 실제 함수를 정의할 때 type 을 비우고 호출하는 시점에 type 을 정의함
- type 을 추론하여 최종 반환값까지 처리할 수 있음
*/

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'hi', selected: true };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = { value: "hi", selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T): T {
//   console.log(text.length);
//   length 에 에러 -> type 'T' 에 length 속성이 없음
//   타입스크립트 입장에서는 logTextLength 함수에 어떤 값이 들어올 지 예측 X
//   타입스크립트에 length 에 대한 힌트를 주기 위해 제네릭에 추가로 타입 힌트(예 - T[])를 줄 수 있다는 것이 요지
//   return text;
// }
// logTextLength("hi");

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  // 제네릭 T 에 이미 정의된 interface 인 LengthType을 extends 해줌, length 가 number 라는 타입이 있는 상태에서 T에 추가로 정의해줄 수 있음을 의미
  // length 에 에러가 나지 않게 됨
  return text;
}
logTextLength("hi"); // 문자열은 기본적으로 length 라는 속성 (메서드)가 제공됨
logTextLength(10); // 숫자에는 기본적으로 length 라는 속성 (메서드)가 제공되지 않기에 에러가 뜸
logTextLength({ length: 10 }); // 객체에 length 라는 속성이 들어가면 정상적으로 에러 없이 출력됨

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  size: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T {
  return itemOption;
}

getShoppingItemOption('name');

/*
ShoppingItem 있는 key 들 중 1가지가 제네릭(타입)이 될 것이라는 의미
getShoppingItemOption 함수의 인자(파라미터)로 name, size, stock 중 1가지가 들어가는 것으로 정의
keyof 로 제네릭의 타입 범위를 제한한다고 볼 수 있음
*/
