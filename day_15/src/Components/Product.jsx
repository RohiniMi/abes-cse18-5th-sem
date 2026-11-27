import React from 'react'

const Product = ({ products }) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto"
        }}>
            {products.map((product) =>
                <div style={{
                    border: "2px solid black",
                    textAlign: "center"
                }}>
                    <img src={product.thumbnail}></img>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h2>{product.price}$</h2>
                    <h2>Rating:{product.rating}</h2>
                </div>)
            }
        </div>
    )
}

export default Product