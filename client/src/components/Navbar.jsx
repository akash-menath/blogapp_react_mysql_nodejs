import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar">
      <div className='container'>
        <div className='logo'>
          <h1>image</h1>
          <img src="" alt="" />
        </div>
        <div className='links'>
          <Link to='/?cat=art' className='link' ><h6>ART</h6></Link>
          <Link to='/?cat=art' className='link' ><h6>SCINCE</h6></Link>
          <Link to='/?cat=art' className='link' ><h6>TECHNOLOGY</h6></Link>
          <Link to='/?cat=art' className='link' ><h6>CINIMA</h6></Link>
          <Link to='/?cat=art' className='link' ><h6>CINIMA</h6></Link>
          <Link to='/?cat=art' className='link' ><h6>FOOD</h6></Link>
          <span>akash</span> 
          <span>Logout</span> 
          <span className='write'><Link to='/write'>write</Link></span> 
        </div>
      </div>
    </div>
  )
}

export default Header