/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var text = document.getElementById('text');
var submit = document.getElementById('submit');
var todoContainer = document.getElementById('todoContainer');
var myStorage = localStorage;
var myStorageKey = 'todo-app.todos';
var todos = [];
function updateStorage() {
    myStorage.setItem(myStorageKey, JSON.stringify(todos));
}
function renderTodos() {
    todoContainer.textContent = '';
    todos.forEach(function (todo, index) {
        var newTodoElement = document.createElement('li');
        newTodoElement.innerHTML = todo;
        // Delete Listener
        newTodoElement.addEventListener('click', function () {
            todos.splice(index, 1);
            updateStorage();
            renderTodos();
        });
        todoContainer.appendChild(newTodoElement);
    });
}
function getTodosFromMyStorage() {
    var oldTodos = JSON.parse(myStorage.getItem(myStorageKey));
    oldTodos === null || oldTodos === void 0 ? void 0 : oldTodos.forEach(function (todo) { todos.push(todo); });
    renderTodos();
}
getTodosFromMyStorage();
function addTodo(todo) {
    todos.push(todo);
    updateStorage();
    renderTodos();
}
submit.addEventListener('click', function () {
    if ((text === null || text === void 0 ? void 0 : text.value) === '')
        return;
    addTodo(text.value);
    text.value = '';
});

/******/ })()
;
//# sourceMappingURL=main.js.map