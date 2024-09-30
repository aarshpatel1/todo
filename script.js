const addToDo = $("#addToDo");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
var todos = JSON.parse(localStorage.getItem("todos")) || [];

// Function to render todos from localStorage
function renderTodos() {
    todoList.innerHTML = ""; // Clear the list first
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input class="form-check-input me-2" type="checkbox" value="" id="checkboxExample${index}" ${todo.completed ? 'checked' : ''}/>
                <label class="form-check-label ${todo.completed ? 'text-decoration-line-through' : ''}" for="checkboxExample${index}">
                    ${todo.text}
                </label>
            </div>
            <button class="btn delete-btn p-0 m-0" data-index="${index}">
                <iconify-icon icon="mdi:delete" width="24" height="24"></iconify-icon>
            </button>
        </li>`;
    });

    // Add event listeners for delete buttons
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", deleteTodo);
    });

    // Add event listeners for checkboxes (mark complete)
    document.querySelectorAll(".form-check-input").forEach(checkbox => {
        checkbox.addEventListener("change", toggleComplete);
    });
}

renderTodos();

addToDo.on("click", function () {
    if (todoInput.value === "") {
        return;
    }

    const newTodo = { text: todoInput.value, completed: false };
    todos.push(newTodo);

    // Save to local storage
    localStorage.setItem("todos", JSON.stringify(todos));

    renderTodos(); // Re-render the list
    todoInput.value = "";
});

function deleteTodo() {
    const index = this.getAttribute('data-index');
    todos.splice(index, 1); // Remove the todo at the specified index
    localStorage.setItem("todos", JSON.stringify(todos)); // Update local storage
    renderTodos(); // Re-render the list
}

// Function to toggle complete/incomplete status
function toggleComplete() {
    const index = this.id.replace('checkboxExample', ''); // Extract index from checkbox ID
    todos[index].completed = !todos[index].completed; // Toggle the completed status
    localStorage.setItem("todos", JSON.stringify(todos)); // Update local storage
    renderTodos(); // Re-render the list
}

// This code will allow you to print todos from local storage
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}

// sortable
$(function () {
    $(".sortable").disableSelection();
    $(".sortable").sortable();
});
