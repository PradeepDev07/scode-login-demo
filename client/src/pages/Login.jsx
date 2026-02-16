import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
const Login = () => {
    const Navigate = useNavigate()
     let [username,setUsername] = useState("")
     let [password,setPassword] = useState("")

    const handelFormSubmit = async(e) => {
        e.preventDefault()
        try {            const response = await fetch("https://scode-login-demo.onrender.com/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,password})
            })
            if(response.ok){
                const data = await response.text()
                alert(data)
                Navigate("/home")
            }else{
                alert("Login failed")
            }
        } catch (error) {
            console.error("Error:",error)
        }
        
    }

  return (
    <div className='login'>
        <h1>Login</h1>
        <form onSubmit={handelFormSubmit}  className='form'>
            <label htmlFor="un">Username</label>
            <input id="un" type="text" placeholder='Username' required value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="pw">Password</label>
            <input  id="pw" type="password" placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Login