let products = [];
const getProductsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    products = data.products;

    products.map((product) => {
        const productsContainer = document.getElementById("products-container");
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "img here";

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const addItemSpan = document.createElement("span");
        addItemSpan.innerText = "ADD";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(addItemSpan);
        div.appendChild(incrementBtn);

        productsContainer.appendChild(div);

        let counter = 0;

        incrementBtn.addEventListener("click", () => {
            counter++;
            addItemSpan.innerText = counter;
            localStorage.setItem("image",product.thumbnail);
            localStorage.setItem("title",product.title);
            localStorage.setItem("price",product.price);
            console.log(localStorage.getItem("product"));
            
        })

        decrementBtn.addEventListener("click",()=>{
            if(counter>0){
                counter --;
                addItemSpan.innerText = counter;
            }
        })

    })

}


getProductsData();


