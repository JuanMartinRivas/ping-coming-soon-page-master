const form = document.querySelector('.form');
const email = document.querySelector('.email');
const errorMessage = document.querySelector('.error-message');
const submitButton = document.querySelector('.submit-btn');

submitButton.addEventListener('click', displayErr);
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function displayErr() {

    if (email.validity.typeMismatch) {
        errorMessage.textContent = "Please provide a valid email address";
        email.style.border = "solid 1px hsl(354, 100%, 66%)"
    } else if (email.value.length === 0) {
        errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
        email.style.border = "solid 1px hsl(354, 100%, 66%)"
    } else {
        errorMessage.textContent = "";
    }
}