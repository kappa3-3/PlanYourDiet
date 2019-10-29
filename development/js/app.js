document.addEventListener('DOMContentLoaded', function () {

    const sendNameBtn = document.getElementById('send-name-button');
    const navbarNameField = document.getElementById('nameInHeader');

    sendNameBtn.addEventListener('click', function (e) {
        e.preventDefault();
        yourName = document.getElementById('name').value;
        localStorage.setItem('savedName', yourName);

        navbarNameField.innerText = localStorage.savedName;

    });


});