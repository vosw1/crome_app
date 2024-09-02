const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li"); // li 요소 만들기
     const span = document.createElement("span"); // span 요소 만들기
     span.innerText = newToDo; // li 내부에 텍스트 설정하기
     const button = document.createElement("button") // button 요소 만들기
     button.innerText = "❌";
     button.addEventListener("click", deleteToDo);
     li.appendChild(span); // span 요소에 li 추가하기
     li.appendChild(button); //  span 요소에 button 추가하기
     toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침 막기
    const newToDo = toDoInput.value; // 입력 필드의 값 저장
    toDoInput.value = ""; // 입력 필드 비우기
    toDos.push(newToDo); // 배열에 추가하기
    paintToDo(newToDo); // 저장된 값을 paintToDo 함수로 전달
    saveToDos(); // local Storage에 저장하기
}

toDoForm.addEventListener("submit", handleToDoSubmit);