console.log(localStorage.getItem("image"),"cart");
const cartConatiner = document.getElementById("cart-container");

const div = document.createElement("div");

const image = document.createElement("img");
image.src = `${localStorage.getItem("image")}`;
image.alt = "product-here";

const title = document.createElement("h1");
title.innerText = localStorage.getItem("title");

const price = document.createElement("h2");
price.innerText = localStorage.getItem("price");

div.appendChild(image);
div.appendChild(title);
div.appendChild(price);

cartConatiner.appendChild(div);
console.log(localStorage.getItem("title"));
