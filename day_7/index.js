const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
    return (<div style={{ textAlign: "center" }}><h1>E-commerce Website</h1></div>)
}
const ProductComponent = () => {

    return (<div className="prod-container">
        <div>Product-01</div>
        <div>Product-02</div>
        <div>Product-03</div>
        <div>Product-04</div>
        <div>Product-05</div>
        <div>Product-06</div>
        <div>Product-07</div>
        <div>Product-01</div>
        <div>Product-02</div>
        <div>Product-03</div>
        <div>Product-04</div>
        <div>Product-05</div>
        <div>Product-06</div>
        <div>Product-07</div>
    </div>)
}
const FooterComponent = () => {
    return (<div><h1>copyright all rights are reserved...</h1></div>)
}
const reactElement = <>
    <HeaderComponent />
    <ProductComponent />
    <FooterComponent />
</>

root.render(reactElement);
