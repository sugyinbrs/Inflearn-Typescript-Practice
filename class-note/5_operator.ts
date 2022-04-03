// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

// 타입의 장점을 살리면서 다양한 타입을 넣을 수 있는 방안 -> OR(|) 연산자 사용
var sena: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toExponential(); // number에 대한 API 나 속성을 프리뷰에서 바로 사용할 수 있게 됨, 유니온 타입의 장점
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
} // 위와 같은 과정은 '타입 가드' 라고 함, 특정 타입으로 타입의 범위를 좁혀나가는 (필터링 하는) 과정
logMessage('hello');
logMessage(100);

// Union Type -> 위와 같이 하나의 타입 이상을 사용할 수 있게 하는 타입