document.getElementById('signup-form').addEventListener('submit', function (event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var errorSpan = document.getElementById('password-error');

    if (password !== confirmPassword) {
      event.preventDefault(); // Prevent the form from submitting
      errorSpan.style.display = 'block'; // Show the error message
    } else {
      errorSpan.style.display = 'none'; // Hide the error message if passwords match
    }
  });