const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if(mailInput.value == "wou@gmail.com" && passwordInput.value == "Test12345.") {
        // Il faudra récupérer le vrai token
        const token = "qlijfdblsjkBfqdsFQGqgfdg"
        setToken(token);
        // Placer ce token en cookie

        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}