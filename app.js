const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) { // 입력받은 값이 숫자가 아닐 때
    console.log("숫자를 입력해주세요~");
} else if (age < 18) { // 18세보다 어릴 때
    console.log("18세 보다 어리시네요ㅜ");
} else if (age >= 18 && age <= 50) { // 18세 이상이고 50세 이하일 때
    console.log("원하는 음료를 마실 수 있으세요~!");
} else { // 50세 초과일 때
    console.log("원하는 음료를 마실 수 없으세요ㅠ");
}