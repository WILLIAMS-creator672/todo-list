const addTaskButton = document.getElementById('addTaskButton')
const seeTaskButton = document.getElementById('seeTaskButton')
const taskSection = document.getElementById('taskSection')
const gobackButton = document.getElementById('goBackButton')
const showMenuButton = document.getElementById('showMenuButton')




seeTaskButton.addEventListener('click', () => {
    setTimeout(() => {

        taskSection.classList.remove('translate-x-[1000px]')

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

gobackButton.addEventListener('click', () => {
    taskSection.classList.add('opacity-0')

    setTimeout(() => {
        taskSection.classList.add('translate-x-[1000px]')
    }, 150);
})

const asideMenu = document.querySelector('aside')
const asideTasksButton = asideMenu.querySelectorAll('button')[0]
const asideAboutButton = asideMenu.querySelectorAll('button')[1]
const asidePrivacyButton = asideMenu.querySelectorAll('button')[2]


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


