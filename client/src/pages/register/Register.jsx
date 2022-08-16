import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
import axios from "axios"

const Register = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [error,setError]=useState(false);


  const handleSubmit= async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res= await axios.post("/auth/register",{
        email,
        username,
        password
      })
      res.data && window.location.replace("/login");
    }catch(err)
    {
      setError(true);
      console.log(err);
    }
  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            type="text" 
            className="registerInput" 
            placeholder='Enter Your Username' 
            onChange={e=>setUsername(e.target.value)}

            />
            <label>Email</label>
            <input 
            type="text" 
            className="registerInput" 
            placeholder='Enter Your Email' 
            onChange={e=>setEmail(e.target.value)}

            />
            <label>Password</label>
            <input 
            type="password" 
            className="registerInput" 
            laceholder='Enter Your Password'
            onChange={e=>setPassword(e.target.value)}

            />
            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLogin">
        <Link className='link' to="/login">LOGIN</Link>
        </button>
        {error && <span>Something went wrong</span>}
    </div>
  )
}

export default Register