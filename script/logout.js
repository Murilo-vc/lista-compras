let botaoLogout = document.getElementById("logout-button");
botaoLogout.addEventListener('click', () => {
    localStorage.removeItem("LOGGED_USER");
    sessionStorage.removeItem("LOGGED_USER");
    window.location.assign('/pages/login.html');
});