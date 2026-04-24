// Select elements
var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
var taskCounter = document.getElementById("taskCounter");

// Track number of tasks
var count = 0;

// Function to update counter
function updateCounter() {
    taskCounter.textContent = count + (count === 1 ? " task" : " tasks");
}

// Add task function
function addTask() {
    var taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Task cannot be empty");
        return;
    }

    // Create list item
    var li = document.createElement("li");

    // Task text
    var span = document.createElement("span");
    span.textContent = taskText;

    // Buttons container
    var btnContainer = document.createElement("div");

    // Complete button
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

    // Delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";

    deleteBtn.onclick = function () {
        taskList.removeChild(li);
        count--;
        updateCounter();
    };

    // Append buttons
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    // Append text and buttons to li
    li.appendChild(span);
    li.appendChild(btnContainer);

    // Add to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Update counter
    count++;
    updateCounter();
}

// Event listeners
addTaskBtn.onclick = addTask;

// Allow Enter key to add task
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});