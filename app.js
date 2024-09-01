const h1 = document.querySelector("div.hello:first-child h1"); // HTML의 요소 가져오기

function handleTitleClick() { // 클릭 시 이벤트
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") { 
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick); // 클릭 시 handleTitleClick 함수 호출