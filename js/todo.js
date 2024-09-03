// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", () => {
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = toDoForm.querySelector("input");
    const toDoList = document.getElementById("todo-list");
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    const TODOS_KEY = "todos";
    const ITEMS_PER_PAGE = 10;

    let toDos = [];
    let currentPage = 1;

    function saveToDos() {
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteToDo(event) {
        const li = event.target.parentElement;
        li.remove();
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        saveToDos();
        updatePagination();
    }

    function paintToDoList() {
        toDoList.innerHTML = "";
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const toDosToDisplay = toDos.slice(start, end);
        
        toDosToDisplay.forEach(paintToDo);
        
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = end >= toDos.length;
        pageInfo.innerText = `${currentPage}`;
    }

    function paintToDo(newToDo) {
        const li = document.createElement("li"); 
        li.id = newToDo.id; 
        const span = document.createElement("span"); 
        span.innerText = newToDo.text; 
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
        toDos.push(newTodoObj); 
        saveToDos(); 
        updatePagination(); 
    }

    function updatePagination() {
        const totalPages = Math.ceil(toDos.length / ITEMS_PER_PAGE);
        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        paintToDoList();
    }

    function handlePagination(event) {
        if (event.target.id === "next-page") {
            currentPage++;
        } else if (event.target.id === "prev-page") {
            currentPage--;
        }
        updatePagination();
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);
    prevPageButton.addEventListener("click", handlePagination);
    nextPageButton.addEventListener("click", handlePagination);

    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos !== null) {
        toDos = JSON.parse(savedToDos); 
        updatePagination(); 
    } else {
        toDos = [];
    }
});
