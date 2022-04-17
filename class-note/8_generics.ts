// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText('hi'); // 문자열 hi
// logText(true); // 진위값 true

function logText<T>(text: T):T {
  console.log(text);
  return text;
}
logText<string>('hi');
// logText 함수를 호출 시 넘길 파라미터(인자)의 타입을 함께 지정하면서 넘길 수 있음
// 프리뷰 -> function logText<string>(text: string): string
// logText('hi') 만 호출 해도 'hi' 인자로 인해 넘겨 받을 타입이 문자열인 것을 자동 추론함
// 파라미터의 타입은 'hi' 라고 하는 문자열이 됨, 반환 역시 문자열