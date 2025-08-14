

function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("div");
        newTask.className = "task";
        newTask.innerHTML = `
            <input type="checkbox">
            <span>${taskInput}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        
        document.getElementById("taskInput").value = "";
        
        saveTasks();
    } else {
        alert("Please enter a task.");
    }
}
function deleteTask(button) {
    var task = button.parentNode;
    task.parentNode.removeChild(task);
    
    saveTasks();
}
function saveTasks() {
    var tasks = document.querySelectorAll(".task span");
    var tasksArray = [];
    tasks.forEach(function(task) {
        tasksArray.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}


function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        var taskList = document.getElementById("taskList");
        tasks.forEach(function(task) {
            var newTask = document.createElement("div");
            newTask.className = "task";
            newTask.innerHTML = `
                <input type="checkbox">
                <span>${task}</span>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(newTask);
        });
    }
}


window.onload = function() {
    loadTasks();
};
