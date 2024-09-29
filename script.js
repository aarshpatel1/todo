const addToDo = $("#addToDo")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
var todos = []

addToDo.on("click", function () {
    todos.push(todoInput.value)
    console.log(todos)
    todoList.innerHTML += `<li>${todos[i]}</li>`
})
