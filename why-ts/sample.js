// function sum(a, b) {
//   return a + b;
// }
// // sum(10, '20'); 1020
// sum();

// @ts-check
// Javascript 에서 Typescript 같은 효과를 주게 됨 (ex - 지정한 type이 입력한 코드의 type 과 다를 경우 빨간줄)
// 하지만 이렇게 계속 JSdoc으로 type을 정의하고, import 하여 사용한다던지, 재활용하거나 확장하는 관점에서는 .ts 파일에서 코드를 작성하는 것이 코드량도 줄어들고 가독성도 높아짐

/**
 *
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 */
function sum(a, b) {
  return a + b;
}
sum(10, "20");
