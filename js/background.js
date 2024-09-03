const images = ["sky.jpeg", "sky2.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // img 추가

bgImage.src = `img/${choseImage}`; // 이미지 경로 설정

bgImage.id = "bg-img"; // id 추가

document.body.appendChild(bgImage); // body 내부에 추가하기