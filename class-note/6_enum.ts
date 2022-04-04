/*
enum(이넘)은 특정 값들의 집합을 의미하는 자료형이며,

타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원함
*/

enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스"
}
// 항목을 목록에 추가할 수록 숫자가 자동 증가함

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'가 출력됨

var yourShoes = Shoes.Adidas;
console.log(yourShoes); // '아디다스'가 출력됨