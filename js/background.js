const images = ["desk.jpeg", "sky.jpeg", "simple.png"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // img 추가

bgImage.src = `img/${choseImage}`; // 이미지 경로 설정

document.body.appendChild(bgImage); // body 내부에 추가하기
