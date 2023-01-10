import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" name='username' placeholder='enter username 'required />
        <input type="text" name='email' placeholder='enter email 'required />
        <input type="text" name='password' placeholder='enter password' required/>
        <p>there is a error</p>
        <button>Login</button>
        <span> have a account <Link to='/login'>Login</Link></span>
      </form>

    </div>
  )
}

export default Register