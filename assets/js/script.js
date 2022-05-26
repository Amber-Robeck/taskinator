var userForm = document.querySelector("#task-form");
var tasksToDo = document.querySelector("#tasks-to-do");

//Function to collect user input and store in object format
var createTaskHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput) {
        alert("Hmmmm.....you seemed to have left the task empty.");
        return;
    }
    else if (!taskTypeInput) {
        alert("You forgot to add a type!");
        return;
    }
    else {

        var formInputValues = {
            name: taskNameInput,
            type: taskTypeInput
        };

        createListItem(formInputValues);

        userForm.reset();

        // setting values back to original state
        document.querySelector("input[name='task-name']").value = "";
        document.querySelector("select[name='task-type']").selectedIndex = 0;
    }
};

//Function to create list item with data passed in arguments
var createListItem = function (data) {
    // create list item
    var taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfo = document.createElement("div");
    taskInfo.className = "task-info";

    // add HTML content to div
    taskInfo.innerHTML = "<h3 class='task-name'>" + data.name + "</h3><span class='task-type'>" + data.type + "</span>";
    taskItem.appendChild(taskInfo);

    // add entire list item to list
    tasksToDo.appendChild(taskItem);
};

userForm.addEventListener("submit", createTaskHandler);