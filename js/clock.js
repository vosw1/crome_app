const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000); // 5초마다 sayHello 실행