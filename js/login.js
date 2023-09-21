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