var addTaskButton = document.querySelector(".btn");
var tasksToDo = document.querySelector("#tasks-to-do");


var createTaskHandler = function () {
    var taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.textContent = "This is a new task.";
    tasksToDo.appendChild(taskItem);
};
addTaskButton.addEventListener("click", createTaskHandler);