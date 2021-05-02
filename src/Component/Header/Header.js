import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
function Header(props) {
  return (
    <div className="header">
      <h3 className="logo">Admin</h3>
      <div className="header-right">
        <Link className='link' to='/signin'>Sign In</Link>
        <Link className='link active' to='/signin'>Logout</Link>
      </div>
    </div>
  )
}

export default Header;
