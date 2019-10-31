const loggedInDashboard = document.querySelector('.app-dashboard-logged-in');
const addRecipe = document.querySelector('.app-dashboard-logged-in__add-recipe');

document.addEventListener('DOMContentLoaded', function(){

    addRecipeBtn = document.querySelector('.app-dashboard-widget-add-recipe');
    addPlanBtn = document.querySelector('.app-dashboard-widget-add-plan');

    //Open the recipes box
    addRecipeBtn.addEventListener('click', function () {
        loggedInDashboard.style.display = "none";
        addRecipe.classList.add('fade-in');
        
    })


});