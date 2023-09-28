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

    function loginClicked() {
        var emailInput = document.getElementById("emailInput").value;
        var passwordInput = document.getElementById("passwordInput").value;

        // Simple validation for email and password
        if (emailInput === "" || passwordInput === "") {
            alert("Email and password are required.");
        } else if (emailInput === "user@example.com" && passwordInput === "password") {
            alert("Login successful!"); // You can redirect to another page here
        } else {
            alert("Invalid email or password.");
        }
    }
}