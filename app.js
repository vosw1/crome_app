const h1 = document.querySelector("div.hello:first-child h1"); // HTML의 요소 가져오기

function handleTitleClick() {
    h1.classList.toggle("clicked");
}