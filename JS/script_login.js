let form = document.getElementById("loginForm");
let inputEmail = document.getElementById("Email");
let password = document.getElementById("password");
let p = document.getElementById("message");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let theEmail = inputEmail.value.trim();
    let the_password = password.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let userFound = users.find(user => user.email === theEmail && user.password === the_password
    );

    if (!userFound) {
        p.textContent = "Invalid email or password";
        p.style.color = "red";
        setTimeout(() => p.textContent = "", 2000);
        form.reset();
        return;
    }


    localStorage.setItem("loggedUser", JSON.stringify(userFound));
    
    p.textContent = "Login successful";
    p.style.color = "green"

    setTimeout(() => {
    window.location.href = "home.html";
}, 1000);

});




