import React from 'react';
import './header.css';
function Header(props) {
  return (
    <div className="header">
      <h4  className="alt logo">{props.title}</h4>
      <h6 className='alt text-center'>Flight Booking System</h6>
      <div className="header-right">
        {props.children}
      </div>
    </div>
  )
}

export default Header;
