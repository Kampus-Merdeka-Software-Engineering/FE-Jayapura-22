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

const BASE_URL = "https://be-jayapura-22-production.up.railway.app";

function login(event) {
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#passwordInput");

    const valueEmail = inputEmail.value;
    const valuePassword = inputPassword.value;

    const form = document.getElementById("login-form");
    if (!form.checkValidity()) {
        alert("Please fill in all required fields!!");
        return false;
    }
    
    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: valueEmail,
            password: valuePassword
        })
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Server returned ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        alert(`Success login`);
        inputEmail.value = "";
        inputPassword.value = "";
    })
    .catch(error => {
        console.error(error);
        alert("An error occurred while processing your request. Please try again later.");
    });
}
