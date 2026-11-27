import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
const Login = ({user}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginHandler = () => {
        if(email===""||password===""){
            alert("All fields are required.")
        }else{
           if(user.email===email){
               if(user.password===password){
                navigate("/dashboard");
               }else{
                alert("Incorrect Password")
               }
           }else{
            alert("User is not Existing.")
           }
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input
                type='email'
                placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <input
                type='password'
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            <br></br>
            <button onClick={loginHandler}>LOGIN</button>
        </div>
    )
}
export default Login