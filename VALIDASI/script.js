document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const date = document.getElementById("date");
    const number = document.getElementById("number");
    const nama = document.getElementById("nama");
    const submitButton = form.querySelector("button[type='submit']");
    const feedbackMessage = document.createElement("div");
    feedbackMessage.className = "alert alert-success text-center mt-3";
    feedbackMessage.style.display = "none";
    form.appendChild(feedbackMessage);
    submitButton.disabled = true;

    function validateEmail() {
        const emailError = document.getElementById("emailError");
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value && !regex.test(email.value)) {
            emailError.textContent = "Email tidak valid.";
            return false;
        }
        emailError.textContent = "";
        return true;
    }

    function validatePassword() {
        const passwordError = document.getElementById("passwordError");
        if (password.value && password.value.length < 8) {
            passwordError.textContent = "Password minimal 8 karakter.";
            return false;
        }
        passwordError.textContent = "";
        return true;
    }

    function validateConfirmPassword() {
        const confirmPasswordError = document.getElementById("confirmPasswordError");
        if (confirmPassword.value && confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Password tidak cocok.";
            return false;
        }
        confirmPasswordError.textContent = "";
        return true;
    }

    function validateDate() {
        const dateError = document.getElementById("dateError");
        const birthYear = new Date(date.value).getFullYear();
        if (date.value && birthYear > 2006) {
            dateError.textContent = "Tanggal lahir harus sebelum 2006.";
            return false;
        }
        dateError.textContent = "";
        return true;
    }

    function validateNumber() {
        const numberError = document.getElementById("numberError");
        const regex = /^08[1-9][0-9]{7,10}$/;
        const number = document.getElementById("number"); 
    
        if (number.value && !regex.test(number.value)) {
            numberError.textContent = "Nomor HP harus berasal dari Indonesia (08xx) dan memiliki 10-13 digit.";
            return false;
        }
        numberError.textContent = "";
        return true;
    }
    
    function validateForm() {
        const allFilled = nama.value.trim() && email.value.trim() && password.value.trim() && confirmPassword.value.trim() && date.value.trim() && number.value.trim();
        const isValid = validateEmail() && validatePassword() && validateConfirmPassword() && validateDate() && validateNumber();
        submitButton.disabled = !(allFilled && isValid);
    }

    email.addEventListener("input", validateForm);
    password.addEventListener("input", validateForm);
    confirmPassword.addEventListener("input", validateForm);
    date.addEventListener("input", validateForm);
    number.addEventListener("input", validateForm);
    nama.addEventListener("input", validateForm);

    form.addEventListener("input", validateForm);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateEmail() && validatePassword() && validateConfirmPassword() && validateDate() && validateNumber()) {
            Swal.fire({
                title: "Registrasi Berhasil!",
                text: "Selamat! Anda telah berhasil mendaftar.",
                icon: "success",
                confirmButtonText: "OK"
            });
            form.reset();
            submitButton.disabled = true;
        }
    });
    
});


// TOGGLE MENU
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('aside').classList.toggle('active');
});
