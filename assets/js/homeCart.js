// account content
document.querySelector("#section").addEventListener("click", () => {
  document.querySelector("#sidebarMenu").classList.toggle("start");
});


// NavBar content

const listNav = document.querySelectorAll(".listNav");
function activeNavLink() {
  listNav.forEach((item) =>
  item.classList.remove('activeNav'));
  this.classList.add('activeNav')
}
 listNav.forEach((item) =>
  item.addEventListener('click',activeNavLink));



// Add active class to the current button (highlight it)

var sidebarMenu = document.getElementById("sidebarMenu");
var btns = sidebarMenu.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("actived");
  current[0].className = current[0].className.replace(" actived", "");
  this.className += " actived";
  });
}







// Search
let searchIcon = document.querySelector('#add-currency-btn');
let search = document.querySelector('.add-currency-list');
let closeSearch = document.querySelector('#close-search');
// Open Search
searchIcon.onclick = () => {
 search.classList.add("active");
};
// Close Search
closeSearch.onclick = () => {
 search.classList.remove("active");
};



// account
let accountIcon = document.querySelector('#account-btn');
let account = document.querySelector('.account');
let closeAccount = document.querySelector('#close-account');
// Open Cart
accountIcon.onclick = () => {
 account.classList.add("active");
};
// Close Cart
closeAccount.onclick = () => {
 account.classList.remove("active");
};


// cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
// Open Cart
cartIcon.onclick = () => {
 cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
 cart.classList.remove("active");
};


//Cart Working Js

if (document.readState == 'loading'){
document.addEventListener('DomContentLoaded', ready)
}else {
ready();
}


// Making Function

function ready() {
// Remove item From Cart
var removeCartButtons = document.getElementsByClassName('cart-remove');
console.log(removeCartButtons);
for (var i = 0; i < removeCartButtons.length; i++){
 var button = removeCartButtons[i]
 button.addEventListener("click", removeCartItem);
}
// Quantity Change 
var quantityInputs = document.getElementsByClassName('cart-quantity');
for (var i = 0; i < quantityInputs.length; i++){
  var input = quantityInputs[i]
  input.addEventListener("change", quantityChanged);
}
// Add to Cart 
 var addCart = document.getElementsByClassName('add-cart');
for (var i = 0; i < addCart.length; i++){
 var button = addCart[i]
 button.addEventListener("click", addCartClicked);
}
 // Buy Button Working
 document.getElementsByClassName('btn-buy')[0].addEventListener("click", buyButtonClicked);
}
// Buy Button function

 function buyButtonClicked(){
  alert("Your Order is placed");
  var cartContent =  document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()){
   cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
 }

// Remove item From Cart
function removeCartItem(event){
 var buttonClicked = event.target;
 buttonClicked.parentElement.remove();
 updateTotal();
}

//Quantity Change
function quantityChanged(event){
 var input = event.target
 if (isNaN(input.value) || input.value <= 0) {
  input.value= 1;
}
updateTotal();
}
// Add To Cart Function

function addCartClicked(event){
 var button = event.target
 var shopProducts = button.parentElement
 var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
 var price = shopProducts.getElementsByClassName('price')[0].innerText;
 var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
 addProductToCart(title, price, productImg);
 updateTotal();
}

function addProductToCart(title, price, productImg) {
 var cartShopBox = document.createElement("div");
 cartShopBox.classList.add("cart-box");
 var cartItems = document.getElementsByClassName("cart-content")[0];
 var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
 for (var i = 0; i < cartItemsNames.length; i++){
   if(cartItemsNames[i].innerText == title) {
    alert("You have already add this product to cart");
    return;
  }
 }

var cartBoxContent = `
 		   <img src="${productImg}" alt="" class="cart-img">
		   <div class="details-box">
		     <div class="cart-product-title">${title}</div>
		     <div class="cart-price">${price}</div>
		     <input type="number" value="1" class="cart-quantity">
		   </div>
		   <!-- Remove Cart -->
		   <i class='bx bxs-trash-alt cart-remove' ></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0]
.addEventListener("click", removeCartItem);

cartShopBox.getElementsByClassName('cart-quantity')[0]
.addEventListener("change", quantityChanged);
}
//Update Total
function updateTotal(){
var cartContent = document.getElementsByClassName('cart-content')[0];
var cartBoxes = cartContent.getElementsByClassName('cart-box');
var total = 0;
for (var i = 0; i < cartBoxes.length; i++){
  var cartBox = cartBoxes[i];
  var priceElement = cartBox.getElementsByClassName('cart-price')[0];
  var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
 var price = parseFloat(priceElement.innerText.replace("$",""));
 var quantity = quantityElement.value;
 total = total + (price * quantity);
}
 // If Price Contain Some Cents ValueS
  total = Math.round(total * 100) / 100;
 

document.getElementsByClassName('total-price')[0].innerText = "$" + total;
}



// OnScroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("slide-in").style.display = "flex";
    document.getElementById("slide-in").style.transition = "all 0.5s ease-out";
  } else {
    document.getElementById("slide-in").style.display = "none";
    document.getElementById("slide-in").style.transition = "all 0.5s ease-out";
  }
  prevScrollpos = currentScrollPos;
}


