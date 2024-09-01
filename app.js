const h1 = document.querySelector(".hello h1:first-child"); // HTML의 요소 가져오기

console.dir(h1);

function handleTilteClick(){ // 클릭시 이벤트
    h1.style.color = "blue";
    console.log("title을 클릭했어요!")
}

function handleMouseEnter(){ 
    h1.innerText = "마우스는 여기 있어요!";
}

function handleMouseLeave(){ 
    h1.innerText = "마우스는 여기 없어요!";
}

function handleWindowResize(){ 
    document.body.style.backgroundColor = "tomato";
}


h1.addEventListener("click", handleTilteClick); // 조건 : 클릭, 일어나는 이벤트
h1.addEventListener("mouseenter", handleMouseEnter); 
h1.addEventListener("mouseleave", handleMouseLeave); 


window.addEventListener("resize", handleWindowResize);