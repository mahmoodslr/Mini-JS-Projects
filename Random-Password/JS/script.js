const passwordBox = document.getElementById("Password");
let Length = 12; 

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&'()*+,-./:;<=>?[]^_`{|}~\"";

function updateLength(value) {
    Length = parseInt(value);
    document.getElementById("lengthDisplay").innerText = Length;
}

function createPassword() {
    let availableChars = "";
    if (document.getElementById("includeUpper").checked) availableChars += upperCase;
    if (document.getElementById("includeLower").checked) availableChars += lowerCase;
    if (document.getElementById("includeNumbers").checked) availableChars += number;
    if (document.getElementById("includeSymbols").checked) availableChars += symbol;

    if (availableChars === "") {
        passwordBox.value = "Please select at least one option!";
        document.getElementById("strengthDisplay").innerText = "";
        return;
    }

    let password = "";
    while (Length > password.length) {
        password += availableChars[Math.floor(Math.random() * availableChars.length)];
    }

    passwordBox.value = password;
    checkStrength(password);
}

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            showCopyConfirmation();
        })
        .catch(err => console.error("Failed to copy: ", err));
}

function showCopyConfirmation() {
    const confirmation = document.getElementById("copyConfirmation");
    confirmation.style.display = "block";
    confirmation.style.opacity = "1";

    setTimeout(() => {
        confirmation.style.opacity = "0";
        setTimeout(() => {
            confirmation.style.display = "none";
        }, 500);
    }, 2000);
}

function checkStrength(password) {
    const lengthCriteria = password.length >= 12;
    const upperCriteria = /[A-Z]/.test(password);
    const lowerCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const symbolCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;
    if (lengthCriteria) strength++;
    if (upperCriteria && lowerCriteria) strength++;
    if (numberCriteria && symbolCriteria) strength++;

    const strengthDisplay = document.getElementById("strengthDisplay");
    if (strength <= 1) {
        strengthDisplay.innerText = "Weak";
        strengthDisplay.style.color = "red";
    } else if (strength === 2) {
        strengthDisplay.innerText = "Medium";
        strengthDisplay.style.color = "orange";
    } else {
        strengthDisplay.innerText = "Strong";
        strengthDisplay.style.color = "green";
    }
}
