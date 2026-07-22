const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email == "" || password == ""){
        alert("Please fill all the fields.");
    }
    else{
        alert("Login Successful!");

        //  PHP login
        window.location.href = "index.html";
    }

})