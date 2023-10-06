const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <button class="complete-button"><i class="far fa-square"></i></button> <!-- Ícone de checkbox não marcado -->
            <span>${taskText}</span>
            <button class="edit-button"><i class="fas fa-pencil-alt"></i></button>
            <button class="delete-button"><i class="fas fa-trash"></i></button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        const editButton = li.querySelector('.edit-button');
        editButton.addEventListener('click', () => editTask(li));

        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => deleteTask(li));

        const completeButton = li.querySelector('.complete-button');
        completeButton.addEventListener('click', () => toggleCompleteTask(li, completeButton));
    }
}

function toggleCompleteTask(li, completeButton) {
    const span = li.querySelector('span');
    span.classList.toggle('completed');

    const checkboxIcon = completeButton.querySelector('i');
    if (span.classList.contains('completed')) {
        checkboxIcon.classList.remove('far', 'fa-square'); // Remove ícone de checkbox não marcado
        checkboxIcon.classList.add('fas', 'fa-check-square'); // Adiciona ícone de checkbox marcado
    } else {
        checkboxIcon.classList.remove('fas', 'fa-check-square'); // Remove ícone de checkbox marcado
        checkboxIcon.classList.add('far', 'fa-square'); // Adiciona ícone de checkbox não marcado
    }
}

// Resto do código (editTask, deleteTask)

function editTask(li) {
    const span = li.querySelector('span');
    const currentText = span.textContent;

    // Limita o texto a 50 caracteres
    const newTaskText = prompt('Editar tarefa (limite de 50 caracteres):', currentText);

    if (newTaskText) {
        // Certifique-se de que o texto não exceda 50 caracteres
        const trimmedText = newTaskText.slice(0, 50);
        span.textContent = trimmedText;
    }
}

function deleteTask(li) {
    taskList.removeChild(li);
}

//-----------------------------------

function updateDateTime() {
    const dateElement = document.getElementById('day');
    const monthElement = document.getElementById('month');

    const now = new Date();

    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'};
    const formattedDate = now.toLocaleDateString('pt-BR', options);

    const [day, month] = formattedDate.split(', ');

    dateElement.textContent = `${day}, `;
    monthElement.textContent = `${month}`;
}

// Atualiza a data e a hora a cada segundo
setInterval(updateDateTime, 1000);

// Chama a função para exibir a data e a hora atuais
updateDateTime();

