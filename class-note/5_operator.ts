// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

// 타입의 장점을 살리면서 다양한 타입을 넣을 수 있는 방안 -> OR(|) 연산자 사용
function logMessage(value: string | number) {
  console.log(value);
}
logMessage('hello');
logMessage(100);

// Union Type -> 위와 같이 하나의 타입 이상을 사용할 수 있게 하는 타입