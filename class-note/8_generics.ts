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
// // logText 함수를 호출 시 넘길 파라미터(인자)의 타입을 함께 지정하면서 넘길 수 있음
// // 프리뷰 -> function logText<string>(text: string): string
// // logText('hi') 만 호출 해도 'hi' 인자로 인해 넘겨 받을 타입이 문자열인 것을 자동 추론함
// // 파라미터의 타입은 'hi' 라고 하는 문자열이 됨, 반환 역시 문자열

function logText(text: string) {
  console.log(text);
  return text;
}
// 현재 상태에서 여러 타입을 인자로 받을 수 있는 이유는 타입을 지정해주지 않았기에 암묵적으로 any 로 받는 것으로 설정 되어 있음
// 인자의 타입을 string으로 지정해준다면 문자열의 내장 API 가 제공이 되며 사용할 수 있음
// 예) text.split('').reverse().join('');

function logNumber(num: number) {
  console.log(num);
  return num;
}
logText('a');
logText(10);
logNumber(10);
logText(true);
// 위와 같이 다른 타입을 받기 위하여 같은 함수(중복되는 코드를) 반복해서 사용한다면 가독성, 유지보수 관점에서 좋지 않음