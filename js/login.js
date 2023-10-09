function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var passwordIcon = document.getElementById("passwordIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.remove("fa-lock");
        passwordIcon.classList.add("fa-unlock");
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove("fa-unlock");
        passwordIcon.classList.add("fa-lock");
    }
}


function handleClick(event) {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("showNavbar");
    navbar.classList.toggle("hideNavbar");
}

var btn = document.getElementById("buttonLogin");
var email = document.getElementById("email");
var password = document.getElementById("password");

btn.addEventListener("click", login);

function login() {
    fetch("https://be-jayapura-22-production.up.railway.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value,
        })
    }) 
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Login failed");
        }
    })
    .then(function (data) {
        // Handle the response data from the server here
        // You can redirect to another page or display a success message
        console.log("Login successful:", data);
    })
    .catch(function (error) {
        // Handle any errors that occurred during the fetch
        // You can display an error message to the user
        console.error("Error:", error);
    });
}