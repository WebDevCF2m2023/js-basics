const task = document.querySelector('input[name=task]');
const errorTask = document.querySelector('#error-task');
const tasks = document.querySelector('#tasks');
let noTasks = true;
let idTask = 0;

function checkLengthTasks(){
    if(tasks.children.length !== 0) return;
    noTasks = true;
    tasks.innerHTML = "<p>Pas encore de tâches</p>";
}

checkLengthTasks();

function createTask(e){
    e.preventDefault();
    const valueTask = task.value;
    const error = [];
    if(valueTask.trim().length === 0) error.push('La tâche ne doit pas être vide.');
    else if(valueTask.trim().length > 100) error.push('La tâche ne doit pas dépasser 100 caractères.');

    if(error.length === 0) addTask(valueTask);

    for (const child of Array.from(errorTask.children)) 
        errorTask.removeChild(child);

    for(let i = 0; i < error.length; ++i){
        const p = document.createElement('p');
        p.textContent = '* ' + error[i];
        errorTask.appendChild(p);
    }

}

function addTask(valueTask){
    if(noTasks){
        tasks.removeChild(tasks.children[0]);
        noTasks = false;
    }
    tasks.innerHTML += `
            <div class="task" data-id="${idTask}">
                <p>${valueTask.replace('<', '&lt;').replace('>', '&gt;')}</p>
                <button class="btn-finish" onclick="finishTask(${idTask})">Terminer</button>
                <button class="btn-delete" onclick="deleteTask(${idTask})">Supprimer</button>
            </div>
    `;
    ++idTask;
}

function finishTask(id){
    for (const child of tasks.children) {
        if(+child.dataset.id !== +id) continue;
        child.querySelector('p').style.backgroundColor = "green";
    }
}

function deleteTask(id){
    for (const child of tasks.children) {
        if(+child.dataset.id !== +id) continue;
        tasks.removeChild(child);
    }
    checkLengthTasks();
}