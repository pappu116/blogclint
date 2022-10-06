import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/authContext'
import '../style.scss'

const Login = () => {
  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })
  
  const [error,setError] = useState(null)
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)
  
  const handleChange = e => {
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
       await login(inputs)
      navigate("/")
      
    } catch (err) {
      setError(err.response.data)
    }
  }
  return (
    <div className='auth'>
    <h1>Login</h1>
    <form >
      <input   required type="text" placeholder='username' name="username" onChange={handleChange}/>
      <input  required type="password" placeholder='password'  name="password" onChange={handleChange}/>
      <button onClick={handleSubmit}>login</button>
     {error && <p>{error}</p>}
      <span>if you Don't have an account? <Link to="/register">Register</Link></span>
    </form>

  </div>
  )
}

export default Login