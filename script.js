const addToDo = $("#addToDo")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
var todos = []

addToDo.on("click", function () {
    todos.push(todoInput.value)
    console.log(todos)
    // todoList.innerHTML += `<li><input type="checkbox" class="form-check-input me-2"> ${todoInput.value}</li>`
    todoList.innerHTML += `
    <li class="list-group-item">
        <input class="form-check-input" type="checkbox" value="" id="checkboxExample${todos.length}" />
        <label class="form-check-label" for="checkboxExample${todos.length}">${todoInput.value}</label>
    </li>
    `
})

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i])
}