// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', ()=> 
// container.classList.add('right-panel-active'));


// signInButton.addEventListener('click', ()=> 
// container.classList.remove('right-panel-active'));


document.addEventListener("DOMContentLoaded", function () {
    // Function to add the "active" class to the top-container
    function activateTopContainer() {
      document.querySelector(".top-container").classList.add("active");
    }
  
    // Function to remove the "active" class from the top-container
    function deactivateTopContainer() {
      document.querySelector(".top-container").classList.remove("active");
    }


 
  
    // Event listener for the "Sign In" button
    document.getElementById("signUp").addEventListener("click", function () {
      activateTopContainer();
    });
  
    // Event listener for the "Sign Up" button
    document.getElementById("signIn").addEventListener("click", function () {
      deactivateTopContainer();
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var confirmPasswordLabel = document.querySelector('label[for="confirmPassword"]');

    function validatePassword() {
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            confirmPasswordLabel.style.color = 'red';
        } else {
            confirmPasswordLabel.style.color = '';
        }
    }

    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);
});