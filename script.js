

const form = document.getElementById('username');
const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');
const successMessage = document.getElementById('successMessage');


function nameInput() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        successMessage.textContent = `Welcome back, ${savedName}!`;
        successMessage.classList.add('success');
    } else {
        successMessage.textContent = '';
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    nameError.textContent = ''; 
    successMessage.textContent = ''; 
    let isValid = true; 

   
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your username';
        isValid = false;
    } else if (nameInput.value.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        isValid = false;
    }

    
    if (isValid) {
        localStorage.setItem('userName', nameInput.value.trim());
        successMessage.textContent = 'Successful!';
        successMessage.classList.add('success');
        nameInput.value = ''; 
        nameInput(); 
    }
});


function clearName() {
    localStorage.removeItem('userName');
    displaySavedName();
    nameError.textContent = ''; 
    successMessage.textContent = ''; 
}


const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    clearName();
});


document.addEventListener('DOMContentLoaded', displaySavedName);



    

