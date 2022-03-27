// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
const str: string = "hello";

// TS 숫자열 선언
const num: number = 10;

// TS Array 선언 (Array 대문자로 선언)
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ["Capt", "Thor", "Hulk", 10]; // 지정한 타입 외 입력 시 컴파일 상 빨간줄 확인 가능
const items: number[] = [1, 2, 3]; // 배열 리터럴

// TS 튜플
const address: [string, number] = ["gangnam", 10]; // 배열의 특정 인덱스 혹은 순서에 타입을 부여하는 것

// TS 객체
const obj: object = {};
// const person: object = {
//   name: 'sue',
//   age: 100
// };
const person: { name: string; age: number } = {
  name: "sue",
  age: 100,
};
// 위와 같이 객체에 구체적으로 타입 명시 가능

// TS 진위값 (boolean)
const show: boolean = true;
