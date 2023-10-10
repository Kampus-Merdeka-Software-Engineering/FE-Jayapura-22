function handleClick(event) {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("showNavbar");
    navbar.classList.toggle("hideNavbar");
}

const BASE_URL = "https://be-jayapura-22-production.up.railway.app";

function register(event) {
    const inputFullname = document.querySelector("#fullname");
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");

    const valueFullname = inputFullname.value;
    const valueEmail = inputEmail.value;
    const valuePassword = inputPassword.value;

    const form = document.getElementById("register-form");
    if (!form.checkValidity()) {
        alert("Please fill in all required fields!!");
        return false;
    }
    console.log(valueFullname);
    fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname: valueFullname,
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
        // Handle the successful response from the server here
        alert(`Your account has been created`);
        inputFullname.value = "";
        inputEmail.value = "";
        inputPassword.value = "";
    })
    .catch(error => {
        console.error(error);
        alert("An error occurred while processing your request. Please try again later.");
    });
}
