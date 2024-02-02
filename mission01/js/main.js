const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리


*/

// this.value.includes("!", "@", "#", "$", "%", "^", "*", "+", "=", "-")

const email = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const specialCharacters = ["!", "@", "#", "$", "%", "^", "*", "+", "=", "-"];

function emailReg(text) {
  if (this.value === user.id) {
    email.classList.remove("is--invalid");
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(text).toLowerCase());
  } else if (this.value.includes("@naver.com")) {
    email.classList.remove("is--invalid");
  } else if (this.value.length > 0) {
    email.classList.add("is--invalid");
  } else {
    email.classList.toggle("is--invalid");
  }
}

function pwReg(text) {
  if (this.value === user.pw) {
    userPassword.classList.remove("is--invalid");
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  } else if (
    this.value.length >= 6 &&
    specialCharacters.some((char) => this.value.includes(char))
    // 이 부분은 mdn에서 .includes을 찾아보다가 Array 메서드를 쭉보고 .some을 활용했습니다
    // 문법은 참고하여 사용하였습니다
    // 문법 풀이는 더 공부하여 이해 해보겠습니다.
  ) {
    userPassword.classList.remove("is--invalid");
  } else if (this.value.length == 0) {
    userPassword.classList.toggle("is--invalid");
  } else {
    userPassword.classList.add("is--invalid");
  }
}

email.addEventListener("input", emailReg);
userPassword.addEventListener("input", pwReg);

["!", "@", "#", "$", "%", "^", "*", "+", "=", "-"];
