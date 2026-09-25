import React from 'react'

const ChildComponent = ({ user }) => {
    const { name, email, section } = user;
    return (
        <div style={{border:"2px solid black"}}>
            <h1>User Data</h1>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{section}</h2>
        </div>
    )
}

export default ChildComponent