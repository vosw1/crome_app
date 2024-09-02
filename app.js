const loginForm = document.querySelector("#login-form");
const loginInut = document.querySelector("#login-form input"); // input 태그 가져오기

function onLoginSubmit(event) { // 자리만 만들어주면 됨
    event.preventDefault(); // form 태그 submit의 기본 동작(새로고침) 막기
    console.log(loginInut.value);
}

loginForm.addEventListener("submit",onLoginSubmit);