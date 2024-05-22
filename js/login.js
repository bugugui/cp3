if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
        { email: 'user@example.com', password: '12345', name: 'John Doe' }
    ]));
}
 
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.email === email && user.password === password);
 
    const messageElement = document.getElementById('message');
    messageElement.classList.remove('error-message', 'success-message');
 
    if (user) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        messageElement.textContent = 'Login bem-sucedido!';
        messageElement.classList.add('success-message');
        messageElement.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 5000);
    } else {
        messageElement.textContent = 'Credenciais de login inválidas';
        messageElement.classList.add('error-message');
        messageElement.style.display = 'block';
    }
});