let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateMessage() {
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function showSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');
    successMessage.classList.remove('hidden');
    nameError.innerHTML = '';
    phoneError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';
    setTimeout(() => {
        successMessage.classList.add('hidden');
        overlay.classList.remove('active');
    }, 3000);
}

function validateForm(event) {
    event.preventDefault();
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    showSuccessMessage();
    document.querySelector('form').reset();
    return true;
}
