
const seeTaskButton = document.getElementById('seeTaskButton')
const taskSection = document.getElementById('taskSection')
const gobackButton = document.getElementById('goBackButton')
const showMenuButton = document.getElementById('showMenuButton')



// SEE TASKS

seeTaskButton.addEventListener('click', () => {
    setTimeout(() => {

        taskSection.classList.remove('-translate-y-[1000px]')

    }, 100);

    setTimeout(() => {
        taskSection.classList.remove('opacity-0')
    }, 360);

    setTimeout(() => {
        taskSection.classList.add('translate-y-[300px]')
    }, 300);

    setTimeout(() => {
        taskSection.classList.remove('translate-y-[300px]')
    }, 350);

    // setTimeout(() => {
    //     taskSection.classList.remove('animate-bounce')
    // }, 600);
})

// BO BACK

gobackButton.addEventListener('click', () => {
    taskSection.classList.add('opaciy-0')

    setTimeout(() => {
        taskSection.classList.add('-translate-y-[1000px]')
    }, 150);
})

const asideMenu = document.querySelector('aside')
const asideTasksButton = asideMenu.querySelectorAll('button')[0]
const asideAboutButton = asideMenu.querySelectorAll('button')[1]
const asidePrivacyButton = asideMenu.querySelectorAll('button')[2]



// SHOW ASIDE MENU

showMenuButton.addEventListener('click', () => {
    const isMenuOpen = asideMenu.classList.contains('w-[150px]');

    if (isMenuOpen) {

        setTimeout(() => {
            asidePrivacyButton.classList.add('-translate-x-[80px]');
        }, 200);

        setTimeout(() => {
            asideAboutButton.classList.add('-translate-x-[80px]');
        }, 300);

        setTimeout(() => {
            asideTasksButton.classList.add('-translate-x-[80px]');
        }, 400);


        setTimeout(() => {
            asideMenu.classList.toggle('w-[150px]');
            // asideMenu.classList.toggle('border-none');
        }, 500);

    } else {

        asideMenu.classList.toggle('w-[150px]');
        // asideMenu.classList.toggle('border-none');


        setTimeout(() => {
            asideTasksButton.classList.remove('-translate-x-[80px]');
        }, 200);

        setTimeout(() => {
            asideAboutButton.classList.remove('-translate-x-[80px]');
        }, 300);

        setTimeout(() => {
            asidePrivacyButton.classList.remove('-translate-x-[80px]');
        }, 400);
    }
});


//TRIGGER CREATE TASK MODAL

const createTaskButton = document.getElementById('createTaskButton')
let createTaskForm = document.getElementById('addTaskForm')
let closeCreateTaskButton = document.getElementById('closeCreateTask')
let overlay = document.getElementById('overlay')

function triggerCreateTaskModal() {
    createTaskForm.classList.remove('hidden')

    setTimeout(() => {
        createTaskForm.classList.remove('opacity-0')
        overlay.classList.remove('hidden')
    }, 100);
}

function closeCreateTaskModal() {
    createTaskForm.classList.add('opacity-0')
    overlay.classList.add('hidden')

    setTimeout(() => {
        createTaskForm.classList.add('hidden')
    }, 100);
}

createTaskButton.addEventListener('click', triggerCreateTaskModal)

closeCreateTaskButton.addEventListener('click', closeCreateTaskModal)


// ADD TASK

let taskNameInput = createTaskForm.querySelectorAll('input')[0];
let taskDateInput = createTaskForm.querySelectorAll('input')[1];
let taskTimeInput = createTaskForm.querySelectorAll('input')[2];
let addTaskButton = createTaskForm.querySelector('button');
let successMessage = document.getElementById('successMessage');
let errorMessage = document.getElementById('errorMessage');

// DISPLAY TASK INFO
let taskInfoDiv = document.getElementById('taskInfoDiv');

let tasks = [];

// RETRIEVE TASKS
const storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    displayTasks();
}

// DELETE TASK
function deleteTask(taskId) {
    
    tasks = tasks.filter(task => task.id != taskId);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    
    displayTasks();

 
    successMessage.classList.remove('opacity-0');
    successMessage.innerHTML = '<i class="fa-solid fa-circle-check"></i> Task Deleted';
    setTimeout(() => {
        successMessage.classList.add('opacity-0');
    }, 2000);
}

function addTask(event) {
    event.preventDefault();

    function errors() {
        errorMessage.classList.remove('opacity-0');
        errorMessage.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> All Fields Required';

        setTimeout(() => {
            errorMessage.classList.add('opacity-0');
        }, 1000);
    }

    if (!taskNameInput.value.trim() || taskDateInput.value === '' || taskTimeInput.value === '') {
        errors();
        return;
    }

    let taskName = taskNameInput.value.trim();
    let taskDate = taskDateInput.value;
    let taskTime = taskTimeInput.value;

    const newTask = {
        id: Date.now(),
        taskName,
        taskDate,
        taskTime,
        completed: false
    };

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks();

    successMessage.classList.remove('opacity-0');
    successMessage.innerHTML = '<i class="fa-solid fa-circle-check"></i> Task Added';
    setTimeout(() => {
        successMessage.classList.add('opacity-0');
    }, 2000);

    taskNameInput.value = '';
    taskDateInput.value = '';
    taskTimeInput.value = '';
}

function displayTasks() {
    taskInfoDiv.innerHTML = '';

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskInfo');

        const taskInfo = document.createElement('div');
        taskInfo.innerHTML = `
            <h1>${task.taskName}</h1>
            <p>${task.taskDate} at ${task.taskTime}</p>
        `;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.dataset.taskId = task.id;

      
        deleteBtn.addEventListener('click', () => {
            deleteTask(task.id);
        });

        taskDiv.appendChild(taskInfo);
        taskDiv.appendChild(deleteBtn);
        taskInfoDiv.appendChild(taskDiv);
    });
}

createTaskForm.addEventListener('submit', addTask);