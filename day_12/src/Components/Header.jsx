import React from 'react'
import {useNavigate} from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav style={{
                display: "flex",
                backgroundColor:"navy",
                color:"white",
                justifyContent:"space-evenly",
                fontSize:"35px"
            }}>
                <div>MyWebsite</div>
                <div style={{ display: "flex", gap: "35px" }}>
                    <div onClick={()=>navigate("/")}>Home</div>
                    <div onClick={()=>navigate("/product")}>Product</div>
                    <div onClick={()=>navigate("/cart")}>Cart</div>
                    <div onClick={()=>navigate("/contact")}>Contact</div>
                </div>
            </nav>
        </div>
    )
}

export default Header