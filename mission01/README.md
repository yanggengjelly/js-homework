# 네이버 로그인 페이지 구현

로그인과 비밀번호를 정확히 입력했을 때 </br> welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

## Project Description

기존 mission01 file에 assets을 확인하지 못해 제 기준으로 UI를 구축하였습니다. </br>

- `user` id 에 있는 값이 정확히 작성되지 않아도 ` nickName + @naver.com`
  만 작성하면</br> `아이디는 이메일 형식으로 입력해 주세요.` 띄우지 않게 보안을 유지</br>

  - (기존 배열 id값을 보호)
  - (nickName은 자유롭게 작성 가능)

- `password`입력칸도 id와 동일하게 자유롭게 입력은 가능하고</br>
  특수문자 포함 6자리 이상 조건만 완성된다면 pw값과 일치하지 않아도 </br>
  `아이디는 이메일 형식으로 입력해 주세요.` 띄우지 않게 코드작성
  </br>하지만 배열에 있는 id 값과 pw 값이 일치해야 로그인 가능

## Project focused

<b><i>js-homework를 진행하면서 개인적으로 포커스를 맞춘 부분과 </br>
[mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript)문서를 참고하여 발견한 오류를 처리하고 구현을 하기 위해 메서드 기능을 문서에서 찾아 활용</i></b>

### 1. 상태관리

한 부분의 코드 로직 작성이 끝나면 추후 문제 ,
지금 내 시야로 보이는 문제

### 2. classList

로그인 페이지에 사용된 classList 속성

### 3. .some method

Array.prototype.some()에 대한 설명과 네이버 로그인 페이지 사용예제

## 1. 상태관리

> 💡 상태관리란? </br>
> 데이터나 정보의 변화를 추적하고 해당 변화에 따라 UI를 업데이트 하는 것을 말한다

- [x] `네이버` Site가 아니면 ? ( <b> 'ID' </b> 뒤 따라오는 @ 메일서버이름 )

- [x] Password 입력시 특수문자 외 또 다른 특수문자가 추가될시

  - [x] <i> ( 비밀번호 입력 과정에서 정규표현식에 있는 특수 문자들을 조건문으로</br> Password 가 true가 나오도록 시도 ) </i>

- [x] 기존 homework에서 제공한 user가 아닌 다른 user가 추가될때 관리 및 로그인 허용
  - [ ] 만약 `user` 배열에 다른 메일서버를 가진 ID를 저장하고 로그인을 한다면?

네이버 로그인 페이지 구현 코드 로직 작성 후 상태관리가 필요할 거 같은</br>
대상들을 변화에 따라 반응할 수 있도록 구현했다.

## 2. classList

> classList 속성 </br>
> 로그인 페이지에 구현된 코드에 많은 classList을 썼는데 왜 이렇게 작동을 할까 ?

classList.toggle 메서드는 HTML 요소의 클래스 목록에 특정 클래스가 존재하면 제거하고,</br>
존재하지 않으면 추가하는 역할을 합니다.
클래스를 스위치(전환)하는 역할을 합니다.</br>
즉, 해당 클래스의 존재 여부에 따라 추가 또는 제거를 반복합니다.

이러한 속성으로 `add` , `remove` 을 활용하여 어떠한 조건에 </br>
classList를 활성화해야 하는지 제거해야 하는지 고려하며 코드로직을 작성함

## 2. .some method

[mdn - Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

> 인스턴스 메서드 some()는 Array배열에 있는 하나 이상의 요소가 제공된 함수에</br> 의해 구현된 테스트를 통과하는지 여부를 테스트합니다. 제공된 함수가 true</br>를 반환하는 요소를 배열에서 찾으면 true를 반환합니다.</br> 그렇지 않으면 false를 반환합니다. 배열을 수정하지 않습니다.

```js
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

처음에는 `includes()` 이용해 코드 로직을 작성했는데 배열항목중</br> 특정 값만 반환되는 메서드라 `user`에 여러 ID 가 추가되거나 비밀번호 입력칸에</br> 특수문자가 첫 번째 기준으로 `!` 만 특수문자로 인식하는 오류를 경험했습니다.

만약 특정 값만 반환되는 메서드가 있다면 배열에 있는 값이 하나라도 유효한다면 true가</br> 반환되는 메서드도 있을 거 같아 mdn문서를 찾아봤습니다.

mdn 문서를 참고하여(문법) 메서드를 활용했습니다.
`user` 배열에 있는 값,</br> 비밀번호 입력칸에
특수문자 배열중 값이 있을 경우 true를 반환하게 이용하여 코드를 작성

## 에러

> <i>처음 길게 작성해 본 자바스크립트라 여러 확인 안된 오류가 있을 거 같지만
> 발견된 오류</i>

- [ ] 만약 user 배열에 다른 메일서버를 가진 ID를 저장하고 로그인을 한다면?

- [ ]

- [ ]
- [ ]

## 참고

- [MDN Web Docs](https://developer.mozilla.org/ko/)
