const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const products = data.products;

    products.map((data)=>document.writeln(data.title));
}
getProducts();