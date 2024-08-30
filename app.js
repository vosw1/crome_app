// 배열 만들기
let daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// 배열 전체 조회하기
console.log(daysOfWeek);  

// 배열 특정값 가져오기
console.log(daysOfWeek[5]); 

// 배열 추가하기
daysOfWeek.push("holiday");
console.log(daysOfWeek); 

// 배열 특정값 삭제하기
daysOfWeek = daysOfWeek.filter(day => day !== "holiday");
console.log(daysOfWeek);  

// map을 이용해서 배열의 특정값 변경하기
daysOfWeek = daysOfWeek.map(day => day === "sun" ? "off" : day);
console.log(daysOfWeek);  

// index를 이용해서 배열의 특정값 변경하기
daysOfWeek[6] = "vacation";
console.log(daysOfWeek);  
