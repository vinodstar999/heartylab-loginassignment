import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className='signup'>
        <Link to='/registration' className='link'>
          SignUp</Link>
      </div>
      <div className='login'>
        <Link to='/login' className='link'>Login</Link>
      </div>
    </div>
  )
}

export default Header