
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
let createTaskModal = document.getElementById('addTaskModal')
let closeCreateTaskButton = document.getElementById('closeCreateTask')
let overlay = document.getElementById('overlay')

function triggerCreateTaskModal() {
    createTaskModal.classList.remove('hidden')

    setTimeout(() => {
        createTaskModal.classList.remove('opacity-0')
        overlay.classList.remove('hidden')
    }, 100);
}

function closeCreateTaskModal() {
    createTaskModal.classList.add('opacity-0')
    overlay.classList.add('hidden')

    setTimeout(() => {
        createTaskModal.classList.add('hidden')
    }, 100);
}

createTaskButton.addEventListener('click', triggerCreateTaskModal)

closeCreateTaskButton.addEventListener('click', closeCreateTaskModal)


// ADD TASK

let taskNameInput = createTaskModal.querySelectorAll('input')[0]
let taskDateInput = createTaskModal.querySelectorAll('input')[1]
let taskTimeInput = createTaskModal.querySelectorAll('input')[2]
let addTaskButton = createTaskModal.querySelector('button')
let successMessage = document.getElementById('successMessage')
let errorMessage = document.getElementById('errorMessage')


function addTask() {
    if (!taskNameInput.value.trim()){
        errorMessage.classList.remove('opacity-0')
        errorMessage.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> All Fields Required'

        setTimeout(() => {
            errorMessage.classList.add('opacity-0')
        }, 1000);
    }
}

addTaskButton.addEventListener('click', addTask)