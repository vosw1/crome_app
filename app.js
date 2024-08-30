// 객체 생성
let player = {
    name: "min",
    points : 100000,
    smart : true,
};

console.log(player);

// player 객체에 접근하기
console.log(player.name); // 변경전 값이 출력
console.log(player.points);
console.log(player.smart);

// 특정 객체의 값 변경하기
player.name = "minkyung"; // 객체에는 변경된 값이 출력
console.log(player.name);

// 객체에 추가하기
player.lastName = "song";
console.log(player);