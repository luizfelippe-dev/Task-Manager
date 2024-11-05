let tasks = loadTasks();
renderTasks(tasks);

document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('taskInput').value.trim();
    const dueDate = document.getElementById('dueDateInput').value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    tasks.push({ text: taskText, completed: false, dueDate });
    saveTasks(tasks);
    renderTasks(tasks);
    document.getElementById('taskInput').value = '';
    document.getElementById('dueDateInput').value = '';
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks(tasks);
}

function editTask(index) {
    const newTaskText = prompt('Edit your task:', tasks[index].text);
    if (newTaskText !== null) {
        tasks[index].text = newTaskText;
        saveTasks(tasks);
        renderTasks(tasks);
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks(tasks);
}

function filterTasks(filter) {
    let filteredTasks;
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else {
        filteredTasks = tasks;
    }
    renderTasks(filteredTasks);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
