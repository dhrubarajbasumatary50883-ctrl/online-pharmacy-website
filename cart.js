let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");
let total = document.getElementById("total");

showCart();

function showCart(){

    cartItems.innerHTML = "";

    let totalPrice = 0;

    let checkoutBtn = document.getElementById("checkoutBtn");

    if(cart.length === 0){

        cartItems.innerHTML = `
            <h3 style="text-align:center; color:#777;">
                Your cart is empty.
            </h3>
        `;

        total.innerHTML = "Total: ₹0";

        checkoutBtn.style.display = "none";

        return;
    }

    checkoutBtn.style.display = "inline-flex";

    for(let i = 0; i < cart.length; i++){

        // Default quantity if old cart items don't have it
        if(!cart[i].quantity){
            cart[i].quantity = 1;
        }

        totalPrice += Number(cart[i].price) * cart[i].quantity;

        cartItems.innerHTML += `
            <div class="item">

                <img src="${cart[i].image || 'images/no-image.png'}" class="cart-image">

                <div class="item-details">

                    <h3>${cart[i].name}</h3>

                    <p>Price: ₹${cart[i].price}</p>

                    <div class="quantity-box">

                        <button onclick="decreaseQty(${i})">−</button>

                        <span>${cart[i].quantity}</span>

                        <button onclick="increaseQty(${i})">+</button>

                    </div>

                    <h4>Total: ₹${cart[i].price * cart[i].quantity}</h4>

                    <button class="remove-btn" onclick="removeItem(${i})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    }

    total.innerHTML = "Total: ₹" + totalPrice;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function increaseQty(index){

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();
}

function decreaseQty(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();
}