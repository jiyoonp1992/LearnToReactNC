const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
    //localStorage.setItem("todos", toDos);
    // localStorage.setItem("todos", JSON.stringify(toDos)) ;
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) ;
}

function deleteTodo(event){
    console.log(event);
    console.log(event.target);
    console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    //span.innerText = newTodo;
    span.innerText = newTodo.text;
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    //toDos.push(newTodo);
    toDos.push(newTodoObj);
    //paintToDo(newTodo);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the Turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);

    toDos = parsedToDos;

    //parsedToDos.forEach(sayHello);
    //parsedToDos.forEach((item) => console.log("this is the Turn of ", item));
    parsedToDos.forEach(paintToDo);
}