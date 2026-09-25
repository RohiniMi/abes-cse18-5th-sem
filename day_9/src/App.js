import React from 'react'
import ChildComponent from './ChildComponent'
const App = () => {
  const user = {
    name:"rohini",
    email:"rohini@gmail.com",
    section:"cse-18"
  }
  return (
    <div style={{textAlign:"center"}}>
      <ChildComponent user={user}/>
    </div>
  )
}

export default App