// Define an array of dummy user information
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    // Add more users as needed
];

const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");
const loginForm = document.getElementById("login-form");
const protectedContent = document.getElementById("protected-content");

loginButton.addEventListener("click", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Check if the provided username and password match any of the users
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
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
