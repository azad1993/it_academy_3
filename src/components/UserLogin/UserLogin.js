import React, { Component } from 'react';
import './UserLogin.css'



export default function UserLogin () {
return(
    <div>
        <br/>
        <label style={{margin:"10px"}}>Email <input type="email" onFocus={()=>{console.log("Yalnız .ru domenlərinə icazə verilir.")}} ></input></label>
        
        <label>Password <input type="password" onFocus={()=>{console.log("Ən azı 8 simvol")}} ></input></label>
        <br/>
        <br/>
        <button>Login</button>
    </div>
)
}