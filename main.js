
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

const exclamations = document.getElementsByClassName("exclamation");
const alertMessages = document.getElementsByClassName("alert");
const emailErrorMessage = document.getElementById("email-error-message");

const formButton = document.getElementById("form-button");

formButton.addEventListener("click", submit);

function showWarning(num) {
    exclamations[num].classList.add("show");
    alertMessages[num].classList.add("show");
}

function deleteWarnings() {
    const warnings = document.querySelectorAll(".show");
    const inputs = document.querySelectorAll(".input-error");
    
    warnings.forEach(warning => {
        warning.classList.remove("show");
    });

    inputs.forEach(input => {
        input.classList.remove("input-error");
    })
}

function submit(e) {
    e.preventDefault();
    deleteWarnings();

    if (!inputFirstName.value) {
        inputFirstName.classList.add("input-error");
        showWarning(0);
    } 
    if (!inputLastName.value) {
        inputLastName.classList.add("input-error");
        showWarning(1);
    } 
    if (!inputEmail.value) {
        emailErrorMessage.innerText= "Email cannot be empty";
        inputEmail.classList.add("input-error");
        showWarning(2);
    } else if (!inputEmail.value.match(regex)) {
        emailErrorMessage.innerText= "Looks like this is not an email";
        inputEmail.classList.add("input-error");
        showWarning(2);
    }
    if (!inputPassword.value) {
        inputPassword.classList.add("input-error");
        showWarning(3);
    } 
    console.log("submit");
}

