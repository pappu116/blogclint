import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
const [inputs,setInputs] = useState({
  username:"",
  email:"",
  password:"",
})

const [error,setError] = useState(null)
const navigate = useNavigate()

const handleChange = e => {
  setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
}

const handleSubmit = async e => {
  e.preventDefault()
  try {
     await axios.post("/auth/register", inputs)
    navigate("/login")
    
  } catch (err) {
    setError(err.response.data)
  }
}

  return (
    <div className='auth'>
    <h1>Register</h1>
    <form >
      <input required type="text" placeholder='username' name="username" onChange={handleChange}/>
      <input required type="email" placeholder='Email' name="email" onChange={handleChange}/>
      <input required type="password" placeholder='password' name="password" onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
      {error && <p>{error}</p>}
      <span>if you  have an account? <Link to="/login">Login</Link></span>
    </form>

  </div>
  )
}

export default Register