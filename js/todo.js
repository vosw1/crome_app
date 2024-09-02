const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li"); 
    li.id = newToDo.id; // id 가져오기
    const span = document.createElement("span"); 
    span.innerText = newToDo.text; // 객체를 text로 나타내기
    const button = document.createElement("button"); 
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button); 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; 
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); // 배열에 추가하기
    paintToDo(newTodoObj); // 저장된 값을 paintToDo 함수로 전달
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo); 
} 