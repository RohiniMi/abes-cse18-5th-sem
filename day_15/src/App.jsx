import React from 'react'
import Login from './Components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from "./Components/Dashboard"
const App = () => {
  const user = {
    name:"Rohini",
    email:"rohinimittal246@gmail.com",
    password:"123456"
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login user={user}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App