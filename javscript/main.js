
let linkBox = document.querySelector('.links');
let linkBoxItems = document.querySelectorAll('.links-item');
let linkBoxItemsArr = [...linkBoxItems];

let toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', function () {
    if (!linkBox.classList.contains('active-links')) {
        toggleBtn.classList.remove('nav-toggle-active');
        linkBox.classList.add('active-links');
        linkBoxItemsArr.forEach((el) => {
            console.log(el);
            el.classList.add('active-li');
        })
    } else {
        toggleBtn.classList.add('nav-toggle-active');
        linkBox.classList.remove('active-links');
        linkBoxItemsArr.forEach((el) => {
            el.classList.remove('active-li');
        })
    }
})


let reviews = [
    {
        id: 1,
        img: './images/avatar-anisha.png',
        name: "Anisha li",
        info: `We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.`,
    },
    {
        id: 2,
        img: './images/avatar-ali.png',
        name: "Ali Bravo",
        info: `We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.`,
    },
    {
        id: 3,
        img: './images/avatar-richard.png',
        name: "Richard Watts",
        info: `Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!`,
    },
    {
        id: 4,
        img: './images/avatar-shanai.png',
        name: "Shanai Gough",
        info: `Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.`,
    },
]

let i = 0;

let nextBtn = document.querySelector('#next-btn');
let prevBtn = document.querySelector('#prev-btn');
let randomBtn = document.querySelector('#random-btn')
let reviewBody = document.querySelector('.review');
let authorName = reviewBody.querySelector('#review-author');
let authorText = reviewBody.querySelector('#author-text');
let authorPic = reviewBody.querySelector('#author-img');

window.addEventListener('load', () => {
    let review = reviews[i];

    authorName.innerText = review.name;
    authorText.innerText = review.info;
    authorPic.setAttribute("src", review.img);
})

nextBtn.addEventListener('click', () => {
    i++;
    if (i == reviews.length) i = 0;
    let review = reviews[i];
    authorName.innerText = review.name;
    authorText.innerText = review.info;
    authorPic.setAttribute("src", review.img);
})

prevBtn.addEventListener('click', () => {
    i--;
    if (i == -1) i = reviews.length - 1;
    let review = reviews[i];
    authorName.innerText = review.name;
    authorText.innerText = review.info;
    authorPic.setAttribute("src", review.img);
})

randomBtn.addEventListener('click', () => {
    i = Math.floor(Math.random() * reviews.length);

    let review = reviews[i];
    authorName.innerText = review.name;
    authorText.innerText = review.info;
    authorPic.setAttribute("src", review.img);
})