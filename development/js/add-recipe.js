

document.addEventListener('DOMContentLoaded', function(){
    const loggedInDashboard = document.querySelector('.app-dashboard-logged-in');
    const addRecipe = document.querySelector('.app-dashboard-logged-in__add-recipe');

    //Open the recipes box
    addRecipeBtn = document.querySelector('.app-dashboard-widget-add-recipe');
    addPlanBtn = document.querySelector('.app-dashboard-widget-add-plan');

    addRecipeBtn.addEventListener('click', function () {
        loggedInDashboard.style.display = "none";
        addRecipe.classList.add('fade-in');
    });


    //Append icons to li items
    stepLi = document.querySelectorAll('.step');
    ingrLi = document.querySelectorAll('.ingr');
    for (i = 0; i < stepLi.length; i++) {
        editIcon = document.createElement('i');
        trashIcon = document.createElement('i');
        editIcon.classList.add("fas", "fa-edit", "orange");
        trashIcon.classList.add("fas", "fa-trash-alt", "red");
        stepLi[i].appendChild(editIcon);
        stepLi[i].appendChild(trashIcon);
    }

    for (i = 0; i < ingrLi.length; i++) {
        editIcon = document.createElement('i');
        trashIcon = document.createElement('i');
        editIcon.classList.add("fas", "fa-edit", "orange");
        trashIcon.classList.add("fas", "fa-trash-alt", "red");
        ingrLi[i].appendChild(editIcon);
        ingrLi[i].appendChild(trashIcon);
    }











});