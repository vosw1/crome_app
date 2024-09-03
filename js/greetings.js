const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { 
    event.preventDefault(); // 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 숨기기
    const username = loginInput.value; // loginInput에 값을 변수에 저장하기
    localStorage.setItem(USERNAME_KEY, username); // 키와 값의 쌍으로 저장하기
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // 저장된 값을 변수 값에 넣기
    greeting.classList.remove(HIDDEN_CLASSNAME); // hidden 클래스명 없애기
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 보이기
    loginForm.addEventListener("submit", onLoginSubmit); // 로그인 폼에 이벤트 리스너 추가
} else {
    paintGreetings(savedUsername); // 저장된 사용자명으로 인사말 표시
}
