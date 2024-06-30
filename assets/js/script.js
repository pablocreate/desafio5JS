let tasks = [
    { id: 16, description: "Hacer Mercado", completed: false },
    { id: 60, description: "Estudiar para la prueba", completed: false },
    { id: 24, description: "Sacar a pasear a Tobby", completed: false }
];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    const totalTasks = document.getElementById('total-tasks');
    const completedTasks = document.getElementById('completed-tasks');

    taskList.innerHTML = '';
    let completedCount = 0;

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        
        li.innerHTML = `
            <span>${task.description}</span>
            <button onclick="toggleTask(${task.id})">${task.completed ? 'Desmarcar' : 'Completar'}</button>
            <button onclick="deleteTask(${task.id})">Borrar</button>
        `;

        taskList.appendChild(li);

        if (task.completed) completedCount++;
    });

    totalTasks.innerText = tasks.length;
    completedTasks.innerText = completedCount;
}

function addTask() {
    const newTaskInput = document.getElementById('new-task-input');
    const newTaskDescription = newTaskInput.value.trim();

    if (newTaskDescription !== '') {
        const newTask = {
            id: Date.now(),
            description: newTaskDescription,
            completed: false
        };

        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

function toggleTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

// Inicializa la lista de tareas al cargar la página
document.addEventListener('DOMContentLoaded', renderTasks);
