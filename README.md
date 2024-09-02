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

### Local Storage

- 웹 브라우저가 데이터를 영구적으로 저장할 수 있는 기능을 제공
- 저장하기 : `localStorage.setItem("키", "값")`
- 가져오기 : `localStorage.getItem("키")`
- 삭제하기 : `localStorage.removeItem("키")`

### 시계 만들기

- interval : 일정한 시간 간격으로 특정 작업을 반복 실행하기 위해 사용
  `setInterval(function, delay);`
- timeout : 일정 시간이 지난 후에 지정한 함수나 코드를 한 번 실행
  `setTimeout(function, delay);`
- Date : 날짜와 시간을 다루기 위한 내장 객체

```const now = new Date();  // 현재 날짜와 시간
console.log(now);

const specificDate = new Date('2024-09-01T12:30:00'); // 특정 날짜와 시간
console.log(specificDate);

const now = new Date();
console.log(now.getFullYear());  // 연도 가져오기
console.log(now.getMonth());     // 월 가져오기 (0부터 11까지: 0 = 1월, 11 = 12월)
console.log(now.getDate());      // 일 가져오기
console.log(now.getHours());     // 시각 가져오기
console.log(now.getMinutes());   // 분 가져오기
console.log(now.getSeconds());   // 초 가져오기

const someDate = new Date();
someDate.setFullYear(2025);   // 연도 설정
someDate.setMonth(0);         // 월 설정 (0 = 1월)
someDate.setDate(15);         // 일 설정
someDate.setHours(10);        // 시각 설정
someDate.setMinutes(30);      // 분 설정
console.log(someDate);

const timestamp = Date.now(); // 타임스탬프
console.log(timestamp);
```

- padStart : String 최소 길이 조정하기
  `"1".padStart(2,"0") // 2자리가 아니면 0 추가하기`

### 랜덤 명언 만들기

- Math.random() : 난수 생성
- `const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];`

### 랜덤 배경 이미지 만들기

- img 요소 추가하기 : `const bgImage = document.createElement("img"); `
- 이미지 경로 설정하기 : `bgImage.src = `img/${choseImage}`;`
- body 내부에 추가하기 : `document.body.appendChild(bgImage);`
