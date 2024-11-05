// Function to render tasks in the UI
function renderTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        if (task.completed) taskItem.classList.add('completed');
        
        const taskContent = document.createElement('span');
        taskContent.textContent = `${task.text} - ${task.dueDate || ''}`;
        
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'task-buttons';
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.onclick = () => toggleComplete(index);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(index);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeTask(index);

        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(removeBtn);

        taskItem.appendChild(taskContent);
        taskItem.appendChild(buttonContainer);
        taskList.appendChild(taskItem);
    });
    updateStats(tasks);
}

// Function to update task statistics
function updateStats(tasks) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const stats = `Total: ${total}, Completed: ${completed}, Active: ${total - completed}`;
    document.getElementById('taskStats').textContent = stats;
}
