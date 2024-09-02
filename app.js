const loginInut = document.querySelector("#login-form input"); // input 태그 가져오기
const loginButton = document.querySelector("#login-form button"); // 버튼 가져오기

function handleBtnClick() {
    const username = loginInut.value;
    console.log(username);
}

loginButton.addEventListener("click", handleBtnClick);