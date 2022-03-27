// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식 (파라미터와 반환 값)
function totalSum(a: number, b: number): number {
  return a + b;
}
totalSum(10, 20, 30, 40, 50); // TS에서는 JS와 다르게 지정한 파라미터 인자의 개수 이상이 들어오면 "Expected 2 arguments, but got 5" 라고 알려주는 특성이 있음