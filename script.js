var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
var taskCounter = document.getElementById("taskCounter");


var count = 0;

function updateCounter() {
    taskCounter.textContent = count + (count === 1 ? " task" : " tasks");
}

function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty");
        return;
    }

    var li = document.createElement("li");

    var span = document.createElement("span");
    span.textContent = taskText;

    var btnContainer = document.createElement("div");

    var completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.style.marginRight = "8px";

    completeBtn.onclick = function () {
        if (span.style.textDecoration === "line-through") {
            span.style.textDecoration = "none";
            span.style.color = "";
        } else {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }
    };

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";

    deleteBtn.onclick = function () {
        taskList.removeChild(li);
        count--;
        updateCounter();
    };

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);

    taskList.appendChild(li);

    
    taskInput.value = "";

    count++;
    updateCounter();
}

addTaskBtn.onclick = addTask;

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
