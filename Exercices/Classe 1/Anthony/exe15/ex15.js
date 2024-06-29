let taskList = document.getElementById("taskList");

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    let li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-100 rounded p-2 mb-2";

    let taskTextElement = document.createElement("span");
    taskTextElement.className = "text-gray-800";
    taskTextElement.textContent = taskText;
    li.appendChild(taskTextElement);

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "flex items-center";

    let editButton = document.createElement('button');
    editButton.className = "text-yellow-500 mx-2";
    editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
    editButton.onclick = function () {
        editTask(li);
    }
    buttonContainer.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.className = "text-red-500";
    deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    deleteButton.onclick = function () {
        deleteTask(li);
    }
    buttonContainer.appendChild(deleteButton);

    li.appendChild(buttonContainer);
    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(task) {
    let taskTextElement = task.firstChild;
    let taskText = taskTextElement.textContent;

    let newTaskText = prompt('Modifier la tâche :', taskText);

    if (newTaskText === null || newTaskText === "") {
        return;
    }

    taskTextElement.textContent = newTaskText;
}

function deleteTask(task) {
    taskList.removeChild(task);
}