# Project

JS를 이용해서 만드는 Crome App 만들기

---

# Tech Stack

| Framework | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=javascript&logoColor=white) ![CSS](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) ![HTML](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) |
| :-------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Tools** |        ![VScode](https://img.shields.io/badge/VScode-FF2D54?logo=visualstudiocode&logoColor=white) ![Notion](https://img.shields.io/badge/-Notion-000000?logo=notion&logoColor=white) ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white)         |

---

# JS 기본 문법

### JS 실행 방법 이해하기

HTML을 통해서 실행 VS 파일 열기

### Data Type 이해하기

다양한 데이터 타입이 있고 JS는 자동으로 이해함

- Integer : 정수
- Text : 글자
- String : 문자열
- Boolean : 참과 거짓
- undefined : 값 없이 변수 선언만 됨
- null : 아무 값이 없음

### 변수 이해하기

- consol.log()로 찍어보면서 이해하기
- const : 변할 수 없는 값 - 기본 설정
- let : 변할 수 있는 값 - 필요할 경우 설정

### 배열 이해하기

- 데이터들의 집합
- 연산자로 만들기 -> String이라 검색하거나 처리할 수 없음
- 배열로 만들기 -> 검색하거나 처리할 수 있음

- 추가 : push
- 수정 : map
  `daysOfWeek = daysOfWeek.filter(day => day !== "holiday");`
  index
  `daysOfWeek[6] = "vacation";`

### 객체 이해하기

- 객체 형태

  ```const player = {
    name: "min",
    points : 100000,
    smart : true,
  };
  ```

- 객체 수정하기
  `player.name = "minkyung";`
- 객체 추가하기
  `player.lastName = "song";`

### 조건문 이해하기

- 조건문 형태

```if() { // 참일 때

} else if() { // 다른 조건 일 때

} else { // 그외

}
```

- && 연산자 : 조건이 모두 참일 때
- || 연산자 : 조건이 하나라도 참일 때

### Document

- DOM의 최상위 객체
- JavaScript의 관점으로 HTML을 보여줌
- 브라우저가 HTML 정보가 많이 들어있는 DOCUMENT라는 객체를 전달해 줌
- HTML에 접근하고 수정할 수 있음

### Event Listner

- JavaScript 객체를 이용하여 이벤트 발생
- 순서
  - HTML의 요소 가져오기
  - addEventListener로 호출
  - Listen 하고 싶은 이벤트 이름 알려주기
  - 이벤트 발생
  - 호출할 함수에 전달

### CSS에 스타일 적용하기

- className
- classList
- toggle

### 값 입력받기

- <form> : 사용자가 입력한 데이터를 서버로 전송하기 위한 폼을 정의
- <input> : 사용자로부터 데이터를 입력받기 위해 사용
- <button> : 버튼을 만들 때 사용
- <a> : 지정된 링크로 이동할 때 사용
