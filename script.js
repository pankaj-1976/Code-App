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
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

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
