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

const email = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");

function emailReg(text) {
  if (this.value === user.id) {
    email.classList.remove("is--invalid");
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(text).toLowerCase());
  } else if (this.value[0]) {
    email.classList.remove("is--invalid");
  } else {
    email.classList.add("is--invalid");
  }
}

function pwReg(text) {
  if (this.value === user.pw) {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  } else {
    email.classList.add("is--invalid");
  }
}

email.addEventListener("input", emailReg);
userPassword.addEventListener("input", pwReg);
