/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("var text = document.getElementById('text');\nvar submit = document.getElementById('submit');\nvar todoContainer = document.getElementById('todoContainer');\nvar myStorage = localStorage;\nvar myStorageKey = 'todo-app.todos';\nvar todos = [];\nfunction updateStorage() {\n    myStorage.setItem(myStorageKey, JSON.stringify(todos));\n}\nfunction renderTodos() {\n    todoContainer.textContent = '';\n    todos.forEach(function (todo, index) {\n        var newTodoElement = document.createElement('li');\n        newTodoElement.innerHTML = todo;\n        newTodoElement.addEventListener('click', function () {\n            todos.splice(index, 1);\n            updateStorage();\n            renderTodos();\n        });\n        todoContainer.appendChild(newTodoElement);\n    });\n}\nfunction getTodosFromMyStorage() {\n    var oldTodos = JSON.parse(myStorage.getItem(myStorageKey) || '');\n    oldTodos === null || oldTodos === void 0 ? void 0 : oldTodos.forEach(function (todo) { todos.push(todo); });\n    renderTodos();\n}\ngetTodosFromMyStorage();\nfunction addTodo(todo) {\n    todos.push(todo);\n    updateStorage();\n    renderTodos();\n}\nsubmit.addEventListener('click', function () {\n    if ((text === null || text === void 0 ? void 0 : text.value) === '')\n        return;\n    addTodo(text.value);\n    text.value = '';\n});\n\n\n//# sourceURL=webpack://todo-app/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;