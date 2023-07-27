document.getElementById('btn-field').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;

    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;

    if (emailValue === 'sakib@gmail.com' && passwordValue === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid email and password')
    }
})