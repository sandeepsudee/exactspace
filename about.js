function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
