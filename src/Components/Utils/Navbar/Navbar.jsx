import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
//navbar component including link to each page

export default function Navbar() {
  return (
    <>
      <div className="nav__container">
        <div className="left">Ambula</div>
        <div className="right">
            <ul>
                <li> <Link to={'/'}>Home</Link></li>
                <li> <Link to={'/about-us'}>About Us</Link></li>
                <li> <Link to={'/contact-us'}>Contact Us</Link></li>
                
            </ul>
        </div>
      </div>
    </>
  )
}
