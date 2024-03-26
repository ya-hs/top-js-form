let passInput = document.querySelector("#password");
let passConfirmInput = document.querySelector("#confirm-password");
const passwordContainer = document.querySelector("#password-container");
const createAccountButton = document.querySelector("#btn-create-account");
const noMatch = passwordContainer.appendChild(document.createElement("p"));
noMatch.textContent = "* Passwords do not match";
noMatch.classList.add("no-match");
noMatch.style.display = "none";

passInput.addEventListener('keyup', checkPassword);
passConfirmInput.addEventListener('keyup', checkPassword);

function checkPassword() {
    passInput = document.querySelector("#password");
    passConfirmInput = document.querySelector("#confirm-password");
    if (passInput.value !== passConfirmInput.value) {
        passInput.style.outline = "red 1px solid";
        passConfirmInput.style.outline = "red 1px solid";
        noMatch.style.display = "block";
    } else {
        passInput = passInput.style.removeProperty("outline");
        passConfirmInput = passConfirmInput.style.removeProperty("outline");
        noMatch.style.display = "none";
    }
}