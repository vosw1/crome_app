const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// = const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침 막기
    toDoInput.value = ""; // 값 비우기 -> 값이 없어지는 것은 아님
    console.log(toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);