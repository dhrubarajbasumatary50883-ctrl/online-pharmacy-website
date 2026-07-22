const form = document.getElementById("registerForm");

form.addEventListener("submit", registerUser);

function registerUser(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(name == "" || email == "" || mobile == "" || password == "" || confirmPassword == ""){
        alert("Please fill all the fields.");
        return;
    }

    if(password != confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    alert("Registration Successful!");

    window.location.href = "login.html";

}