document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.querySelector('.login');
    const regSection = document.querySelector('.reg');
    const signUpLink = document.querySelector('.login .signupContainer a');
    const signInLink = document.querySelector('.reg .signinContainer a');

    if (signUpLink) {
        signUpLink.addEventListener("click", function(event) {
            event.preventDefault();
            loginSection.style.display = "none";
            regSection.style.display = "flex";
        });
    }

    if (signInLink) {
        signInLink.addEventListener("click", function(event) {
            event.preventDefault();
            loginSection.style.display = "flex";
            regSection.style.display = "none";
        });
    }
});
