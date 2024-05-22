const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
if (!user) {
    window.location.href = 'login.html';
} else {
    document.getElementById('user-info').textContent = `Olá, ${user.name}! Seu email é ${user.email}.`;
}

document.getElementById('logout-button').addEventListener('click', function() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
});