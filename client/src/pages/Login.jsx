import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" name='username' placeholder='enter username ' />
        <input type="text" name='password' placeholder='enter password' />
        <p>there is a error</p>
        <button>Login</button>
        <span>Dont how have a account <Link to='/register'>Register</Link></span>
      </form>

    </div>
  )
}

export default Login