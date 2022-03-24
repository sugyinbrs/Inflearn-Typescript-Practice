// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

// 타입스크립트에서 아래와 같은 설명 주석을 사용할 수 있는 이유는 JSDoc을 지원하기 때문
// JSDoc이란 JavaScript 소스 코드에 대한 설명을 하기 위해 사용되는 마크업 언어
// 하단에서 객체에 대한 정의를 속성으로 작성
// 오탈자가 난다면 빨간점이 생기게 됨
// 브라우저를 실행하기 전에 코드 상에서 오탈자를 살펴볼 수 있게 됨

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.city;
});

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerHTML = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
