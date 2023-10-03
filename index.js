// Replace these with your actual username and password
const validUsername = "user";
const validPassword = "password";

const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");
const loginForm = document.getElementById("login-form");
const protectedContent = document.getElementById("protected-content");

loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        loginForm.style.display = "none";
        protectedContent.style.display = "block";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

logoutButton.addEventListener("click", () => {
    loginForm.style.display = "block";
    protectedContent.style.display = "none";
});
