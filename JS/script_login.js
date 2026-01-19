let form = document.getElementById("loginForm");
let inputEmail = document.getElementById("Email");
let password = document.getElementById("password");
let p = document.getElementById("message");

function the_user() {
if (!localStorage.getItem("users")) {
    let users = [
        { email: "duvanpiedrahita@gmail.com", password: "123" },
        { email: "duvancito@gmail.com", password: "1212" },
        {email:"duvi@gmail.com", password: "duvi"},
    ];

    localStorage.setItem("users", JSON.stringify(users));
}
}
the_user();
form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let theEmail = inputEmail.value.trim();
    let the_password = password.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let userFound =  false;


    for (let i = 0; i < users.length; i++) {
        if (users[i].email === theEmail && users[i].password === the_password) {
            userFound = true;

            localStorage.setItem("loggedUser",theEmail);
            break;
        }
    }
    if (userFound) {
        p.textContent = "Login successful";
        p.style.color = "green";
        setTimeout(()=>{
            window.location.href = "profiles.html"
        },1000)
        
    }
    else{
        p.textContent = "Wrong email or password";  
        p.style.color = "red";
    }
});




