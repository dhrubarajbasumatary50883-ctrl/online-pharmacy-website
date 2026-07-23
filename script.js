const searchInput=document.getElementById("searchInput");

const searchResults=document.getElementById("searchResults");

searchInput.addEventListener("input",()=>{

const keyword=searchInput.value.toLowerCase().trim();

searchResults.innerHTML="";

if(keyword===""){

searchResults.style.display="none";

return;

}

const filtered=medicines.filter(item=>{

return item.name.toLowerCase().includes(keyword);

});

if(filtered.length===0){

searchResults.innerHTML="<div class='no-result'>No medicine found.</div>";

searchResults.style.display="block";

return;

}

filtered.forEach(item=>{

const div=document.createElement("div");

div.className="result";

div.innerHTML = `

    <img src="${item.image}">

    <div>

        <div class="result-name">${item.name}</div>

        <div class="result-price">${item.price}</div>

        <button class="view-btn">View Details</button>

        <button
            class="search-cart"
            data-name="${item.name}"
            data-price="${item.price.replace("₹","")}">
            Add to Cart
        </button>

    </div>

`;

searchResults.appendChild(div);

});

searchResults.style.display="block";

});

// Add to Cart
let buttons = document.querySelectorAll(".add-cart");

buttons.forEach(function(button){

    button.onclick = function(){

        let name = button.getAttribute("data-name");
        let price = button.getAttribute("data-price");
        let image = button.parentElement.querySelector("img").src;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            name: name,
            price: Number(price),
            image: image,
            quantity: 1
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        showToast(name);

    };

});
//ad to cart and view details in search buttton//
document.addEventListener("click", function(event){

    if(event.target.classList.contains("search-cart")){

        let name = event.target.getAttribute("data-name");
        let price = event.target.getAttribute("data-price");
        let image = event.target.closest(".result").querySelector("img").src;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            name: name,
            price: Number(price),
            image: image,
            quantity: 1
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        showToast(name);
    }

});

function showToast(medicineName){

    let toast=document.getElementById("toast");

    document.getElementById("toastMedicine").innerHTML=medicineName;

    toast.classList.add("show");

    setTimeout(function(){

        toast.classList.remove("show");

    },2500);

}
        /* SLIDER bar */

let slides = document.querySelectorAll(".slide");

let dots = document.querySelectorAll(".dot");

let currentSlide = 0;


/* Show Slide */

function showSlide(index){

    slides.forEach(function(slide){

        slide.classList.remove("slide-active");

    });

    dots.forEach(function(dot){

        dot.classList.remove("active");

    });

    slides[index].classList.add("slide-active");

    dots[index].classList.add("active");

}


/* Next Slide */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


/* Previous Slide */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}


/* Arrow Buttons */

document.querySelector(".next").addEventListener("click", nextSlide);

document.querySelector(".prev").addEventListener("click", prevSlide);


/* Auto Slide */

setInterval(nextSlide,4000);


/* Dot Navigation */

dots.forEach(function(dot,index){

    dot.addEventListener("click",function(){

        currentSlide = index;

        showSlide(currentSlide);

    });

});