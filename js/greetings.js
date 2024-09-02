const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const freeting =- document.querySelector("#greeting");

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
    greeting.innerText = `Hello ${username}`; //저장된 값을 변수 값에 넣기
    greeting.classList.remove(HIDDEN_CLASSNAME); // hidden 클래스명 없애기
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(saveUsername);
}