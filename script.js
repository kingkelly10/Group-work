var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
var taskCounter = document.getElementById("taskCounter");

var count = 0;

// Update counter
function updateCounter() {
    taskCounter.textContent = count + (count === 1 ? " task" : " tasks");
}

// Add task
addTaskBtn.addEventListener("click", function () {
    var taskText = taskInput.value.trim();

    if (taskText === "") return;

    // create list item
    var li = document.createElement("li");

    // task text
    var span = document.createElement("span");
    span.textContent = taskText;

    // BUTTON CONTAINER
    var btnGroup = document.createElement("div");
    btnGroup.style.display = "flex";
    btnGroup.style.gap = "8px";

    // DELETE BUTTON 🗑
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.style.border = "none";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.padding = "6px 10px";
    deleteBtn.style.borderRadius = "8px";
    deleteBtn.style.background = "#ff4d4d";
    deleteBtn.style.color = "white";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        count--;
        updateCounter();
    });

    // COMPLETE / CYCLE BUTTON 🔄 → ✓
    var completeBtn = document.createElement("button");
    completeBtn.textContent = "🔄";
    completeBtn.style.border = "none";
    completeBtn.style.cursor = "pointer";
    completeBtn.style.padding = "6px 10px";
    completeBtn.style.borderRadius = "8px";
    completeBtn.style.background = "#e2e8f0";

    var isDone = false;

    completeBtn.addEventListener("click", function () {
        isDone = !isDone;

        if (isDone) {
            li.style.background = "#d1fae5";
            span.style.textDecoration = "line-through";
            span.style.color = "#065f46";

            completeBtn.textContent = "✔";
            completeBtn.style.background = "#22c55e";
            completeBtn.style.color = "white";
        } else {
            li.style.background = "#fff";
            span.style.textDecoration = "none";
            span.style.color = "#2d3436";

            completeBtn.textContent = "🔄";
            completeBtn.style.background = "#e2e8f0";
            completeBtn.style.color = "black";
        }
    });

    // assemble buttons
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);

    taskInput.value = "";
    count++;
    updateCounter();
});