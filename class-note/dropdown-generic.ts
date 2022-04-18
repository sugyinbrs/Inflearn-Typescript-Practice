// 인터페이스 & 제네릭을 이용하여 타입 정의 수정
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// 인터페이스 설정 후 비교
// interface Email {
//   value: string;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];
// object[] 를 구체적으로 작성 -> { value: string; selected: boolean}[]
// 인터페이스가 있다면 -> 인터페이스명[]

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: { value: number; selected: boolean }) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }
/*
문제점 발생
- emails, numberOfProducts 배열이 존재 -> 그래서 item 인자의 value 속성 type 이 string 뿐만 아니라 number 도 가능 -> number 로 입력 시 아래 이메일 드롭 다운 아이템 추가하는 함수 email 인자에 경고 빨간 줄이 뜸

원하는 방향
- emails, numberOfProducts 배열 모두를 수용할 수 있는 type 을 이메일 드롭 다운 아이템 추가하는 함수를 위해 정의할 수 있어야 함 -> 인터페이스를 만들어 봄 (상단)
*/

function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}
// 위 코드는 createDropdownItem 인자를 (item: DropdownItem<string> | DropdownItem<number>) 으로 설정하는 것의 리팩토링 한 것, 유니온 타입 제거
/*
위와 같은 함수로 만들면 Email, ProductNumber 인터페이스를 통해 value와 selected 속성의 type 모두를 수용할 수 있게 됨
*/

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
});
// numberOfProducts 함수 역시 인자를 문제 없이 받을 수 있게 됨

// 하지만 동일한 속성 중 타입 하나가 다르다는 이유로 각각 인터페이스를 생성하고 타입을 정의하게 되어 코드가 늘어남
