const removeList = document.querySelector(".fa-bars");
let showIcon = document.querySelector(".bars"),
    links = document.querySelector(".nav-links");

showIcon.addEventListener('click', () => {
    links.classList.toggle('display');
    if (removeList.classList.contains('fa-bars')) {
        removeList.classList.replace('fa-bars', 'fa-xmark');
        links.style = 'block'
    }
    else {
        links.style = 'none'
        removeList.classList.replace('fa-xmark', 'fa-bars');
    }
});

const user = document.querySelector('.fa-user');
const mmm = document.querySelector('.mmm');
const login = document.querySelector('#login');

user.addEventListener('click', () => {
    if (mmm.classList.contains('mmm')) {
        mmm.classList.replace('mmm', 'login')
        mmm.style.display = 'none'
        login.style.display = 'block'
    } else {
        mmm.style.display = 'block'
        login.style.display = 'none'
        mmm.classList.replace('login', 'mmm')
    }

})

// ==========================load-more function

let loadMore = document.querySelector('#load-more');
let currenImg = 3;
loadMore.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .box-container .box')];
    for (var i = currenImg; i < currenImg + 2; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currenImg += 2;
    if (currenImg >= boxes.length) {
        loadMore.style.display = 'none';
    }
}
