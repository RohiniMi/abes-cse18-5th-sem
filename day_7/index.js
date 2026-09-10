const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>E-commerce Website</h1>
        </div>
    );
};

const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    return data.products;
};

const ProductComponent = ({ products }) => {
    return (
        <div className="prod-container">
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.thumbnail}></img>
                    {product.title}
                </div>
            ))}
        </div>
    );
};

const FooterComponent = () => {
    return (
        <div>
            <h1>Copyright all rights are reserved...</h1>
        </div>
    );
};

const renderApp = async () => {

    const products = await getProducts();

    const reactElement = (
        <>
            <HeaderComponent />
            <ProductComponent products={products} />
            <FooterComponent />
        </>
    );

    root.render(reactElement);
};

renderApp();