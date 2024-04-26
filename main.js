if(!localStorage.getItem("LOGGED_USER") && !sessionStorage.getItem("LOGGED_USER")){
    location.replace("./pages/login.html");
}