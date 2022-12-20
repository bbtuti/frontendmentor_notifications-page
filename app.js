const notifCount = document.querySelector('.notif-counter')
const unreadMessages = document.querySelectorAll('.unread-notif')
const readAll = document.querySelector('.all-read')

notifCount.innerText = unreadMessages.length;

// function that counts and removes the unread notifications one by one

for (let message of unreadMessages) {
    message.addEventListener('click', () => {
        message.classList.remove('unread-notif');

        const newUnread = document.querySelectorAll('.unread-notif')
        notifCount.innerText = newUnread.length;
    })
}

// function that reads all unread notifications

readAll.addEventListener('click', () => {
    for (let message of unreadMessages){
        message.classList.remove('unread-notif')

        const newUnread = document.querySelectorAll('.unread-notif')
        notifCount.innerText = newUnread.length;
    }
})

