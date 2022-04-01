/*
interface 장점
1) 반복되는 type 들에 대해 하나의 interface 로 정의 가능
2) 오탈자가 나는 것을 방지
3) 상호 약속한 규칙에 따라 속성의 type 을 정의하고 사용
*/

interface User {
  age: number;
  name: string;
}

const sena: User = {
  age: 30,
  name: '세나'
}