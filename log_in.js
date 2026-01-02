document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rememberMe = document.querySelector(".custom-box input");
    const forgotLink = document.getElementById("forgotPassword")

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            alert("Please fill in both email and password.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least characters long.");
            return;
        }

        if (rememberMe.checked) {
            localStorage.setItem("savedEmail", email);
        } else {
            localStorage.removeItem("savedEmail");
        }

        alert("Login successful!🎉");
    });

    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMe.checked = true;
    }

    forgotLink.addEventListener("click", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter your email first.");
            return;
        }

        alert(
            `Password reset instructions have been sent for "${email}". 📧`
        );
    });

});

