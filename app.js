const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const freeting =- document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) { 
    event.preventDefault(); // 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 숨기기
    const username = loginInput.value; // loginInput에 값을 변수에 저장하기
    localStorage.setItem("username", username); // 키와 값의 쌍으로 저장하기
    greeting.innerText = `Hello ${username}`; //저장된 값을 변수 값에 넣기
    greeting.classList.remove(HIDDEN_CLASSNAME); // hidden 클래스명 없애기
}

loginForm.addEventListener("submit",onLoginSubmit);