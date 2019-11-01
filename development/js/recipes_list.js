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
//////////////
// DISPLAY RECIPES FROM LOCAL STORAGE
//////////////

const importedTableRow = document.getElementById('recipe-list-value');
const newId = document.getElementById('recipe-list-counter');
const newName = document.getElementById('recipe-list-name');
const newDescription = document.getElementById('recipe-list-description');
const byBtn = document.querySelector('.fa-plus-square');
const tableContainer = document.querySelector('.recipe-list-container');

// let recipeTable = {
//     id: "",
//     title: "",
//     description: "",
// };




const newRecipe = localStorage.getItem('recipes');

const newRecipeObject = JSON.parse(newRecipe);
    //
    // console.log(newRecipeObject[0]);
for (let i = 0; i < newRecipeObject.length; i++) {
    let newTableRow = importedTableRow.cloneNode(true);
    for (let j = 0; j < 3, j++) {

    }
    tableContainer.appendChild(newTableRow);
};



