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
const specialCharacters = ["!", "@", "#", "$", "%", "^", "*", "+", "=", "-"];
function severEmail(id) {
  return id.includes("@naver.com");
}

function emailReg(text) {
  if (users.some((user) => user.id === text)) {
    email.classList.remove("is--invalid");
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(text).toLowerCase());
  } else if (severEmail(this.value)) {
    email.classList.remove("is--invalid");
  } else if (this.value.length > 0) {
    email.classList.add("is--invalid");
  } else {
    email.classList.toggle("is--invalid");
  }
}

function pwReg(text) {
  if (users.some((user) => user.pw === text)) {
    userPassword.classList.remove("is--invalid");
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  } else if (
    this.value.length >= 6 &&
    specialCharacters.some((sign) => this.value.includes(sign))
  ) {
    userPassword.classList.remove("is--invalid");
  } else if (this.value.length == 0) {
    userPassword.classList.toggle("is--invalid");
  } else {
    userPassword.classList.add("is--invalid");
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if (
    users.some(
      (user) => user.id === email.value && user.pw === userPassword.value
    )
  ) {
    window.location.href = "http://127.0.0.1:5501/mission01/welcome.html";
  } else {
    alert("아이디 또는 비밀번호를 다시 입력해주세요");
  }
}

email.addEventListener("input", emailReg);
userPassword.addEventListener("input", pwReg);
loginButton.addEventListener("click", handleSubmit);
