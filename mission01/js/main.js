// const user = {
//   id: "asd@naver.com",
//   pw: "spdlqj123!@",
// };

const users = [
  {
    id: "asd@naver.com",
    pw: "spdlqj123!@",
  },
  {
    id: "yang@naver.com",
    pw: "@1234@",
  },
];
/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리


*/

const email = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");
//  만약 다른 특수문자가 추가될시
const specialCharacters = ["!", "@", "#", "$", "%", "^", "*", "+", "=", "-"];
// 네이버가 아닌 다른 사이트에서 로그인시 관리
function severEmail(id) {
  return id.includes("@naver.com");
}

function emailReg(text) {
  if (users.some((user) => user.id === text)) {
    // this.value === user.id
    email.classList.remove("is--invalid");
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(text).toLowerCase());
  } else if (severEmail(this.value)) {
    //this.value.includes("@naver.com") 처음에 작성했던 코드
    email.classList.remove("is--invalid");
  } else if (this.value.length > 0) {
    email.classList.add("is--invalid");
  } else {
    email.classList.toggle("is--invalid");
  }
}

function pwReg(text) {
  if (users.some((user) => user.pw === text)) {
    //this.value === user.pw
    // 이 부분도 .some을 써보면 어떨까 하며 적용해 봤습니다.
    userPassword.classList.remove("is--invalid");
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  } else if (
    this.value.length >= 6 &&
    specialCharacters.some((sign) => this.value.includes(sign))
  ) {
    userPassword.classList.remove("is--invalid");
    // this.value.includes("!", "@", "#", "$", "%", "^", "*", "+", "=", "-") 처음에 썻던 코드
    // .includes메서드를 정확히 잘 몰랐을때
    // 이 부분은 mdn에서 .includes을 찾아보다가 Array 메서드를 쭉보고 .some을 활용했습니다
    // 문법은 참고하여 사용하였습니다
    // 문법 풀이는 더 공부하여 이해 해보겠습니다.
  } else if (this.value.length == 0) {
    userPassword.classList.toggle("is--invalid");
  } else {
    userPassword.classList.add("is--invalid");
  }
}

function handleSubmit(e) {
  e.preventDefault(); // button의 기본액션 방지
  if (
    users.some(
      (user) => user.id === email.value && user.pw === userPassword.value
    )
  ) {
    //email.value === user.id && userPassword.value === user.pw
    window.location.href = "http://127.0.0.1:5501/mission01/welcome.html";
  } else {
    alert("아이디 또는 비밀번호를 다시 입력해주세요");
  }
}

email.addEventListener("input", emailReg);
userPassword.addEventListener("input", pwReg);
loginButton.addEventListener("click", handleSubmit);
