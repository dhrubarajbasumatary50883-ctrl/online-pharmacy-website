// Show selected file name

let file = document.getElementById("prescriptionFile");

let fileName = document.getElementById("fileName");

file.addEventListener("change", function(){

    if(file.files.length > 0){

        fileName.innerHTML = file.files[0].name;

    }else{

        fileName.innerHTML = "No file selected";

    }

});


// Submit Prescription

function submitPrescription(){

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let prescription = document.getElementById("prescriptionFile").value;

    if(name==="" || phone==="" || prescription===""){

        showMessage("Please fill all required fields.");

        return;

    }

    showMessage("Prescription Uploaded Successfully!");

    setTimeout(function(){

        window.location.href="index.html";

    },2000);

}


// Message Box

function showMessage(message){

    let box = document.getElementById("messageBox");

    let text = document.getElementById("messageText");

    text.innerHTML = message;

    box.classList.add("show");

    setTimeout(function(){

        box.classList.remove("show");

    },2000);

}