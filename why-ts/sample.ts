function add(a: number, b: number): number {
  return a + b;
}
var result = add(10, 20);
result.toLocaleString();

/*
- add 함수의 파라미터로 a, b 가 들어가고 각각 콜론(:) 을 사용하여 type 을 명시
- add 함수의 파라미터 a, b 의 type 을 number 로 명시하였으나 add 함수 호출 시 add(10, '20') 로 호출하였다면 빨간줄이 뜨며 에러를 사전 방지 할 수 있음

- 위에서 result 만 코드 작성 시 자동 완성에 number 라고 type 이 명시
- 따라서 result. 을 입력하면 number 에서 사용하는 API(method) 를 자동 완성(intellisense)으로 사용할 수 있게 됨
- 같은 코드를 .js 파일 상에서 입력하면 자동 완성(intellisense)이 뜨질 않아 API(method) 오탈자가 발생할 수 있음
*/
