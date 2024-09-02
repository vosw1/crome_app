const loginInut = document.querySelector("#login-form input"); // input 태그 가져오기
const loginButton = document.querySelector("#login-form button"); // 버튼 가져오기

function handleBtnClick() {
    console.log(loginInut.value);
    console.log("클릭했어요");
}

loginButton.addEventListener("click", handleBtnClick);