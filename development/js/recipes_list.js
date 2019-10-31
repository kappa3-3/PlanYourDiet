//5.1 if in przepisy keep the whitebachground
const whiteBG = document.querySelector('.app-welcome-dashboard_whitebg');
const arrayClickedLi = document.querySelectorAll('li');
const actualLiArray = Array.from(arrayClickedLi);
const aArray = document.querySelectorAll('a');
const actualArrayA = Array.from(aArray);

function urlCheck() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page === 'recipes.html') {
        console.log(page);
        whiteBG.style.display = 'block';
    }
};
urlCheck();

// console.log(ArrayClickedLi);
    for (let i = 0; i < actualArrayA.length; i++) {
        console.log(actualArrayA[i]);
        actualArrayA[i].addEventListener('click', function () {
        actualArrayA[i].classList.add('hover-clicked');

    }
        )};
