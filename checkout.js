let cart = JSON.parse(localStorage.getItem("cart")) || [];

let summaryItems = document.getElementById("summaryItems");
let grandTotal = document.getElementById("grandTotal");

let total = 0;

// Show Order Summary
for(let i = 0; i < cart.length; i++){

    let quantity = cart[i].quantity || 1;

    let itemTotal = Number(cart[i].price) * quantity;

    total += itemTotal;

    summaryItems.innerHTML += `
        <div class="order-item">
            <span>${cart[i].name} x ${quantity}</span>
            <span>₹${itemTotal}</span>
        </div>
    `;
}

grandTotal.innerHTML = "Total : ₹" + total;


// Place Order
function placeOrder(){

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if(name==="" || phone==="" || address===""){

        showMessage("Please fill all required fields.");

        return;

    }
    let delivery = document.querySelector('input[name="delivery"]:checked').value;
    showMessage("Order Placed Successfully!");
    
    setTimeout(function(){

    localStorage.removeItem("cart");

    window.location.href = "order-success.html";

},2000);
}
// Show Toast Notification//
function showMessage(message){

    let box = document.getElementById("messageBox");

    let text = document.getElementById("messageText");

    text.innerHTML = message;

    box.classList.add("show");

    setTimeout(function(){

        box.classList.remove("show");

    },2000);

}