import React, { useState } from 'react'
import LOGO from '../../public/LOGO.png'
import { Link } from 'react-router-dom';

const Header = () => {
  let [btnName,setBtnName] = useState("Login");
  console.log("header rendered");
  return (
    <div className='flex items-center justify-between px-8 shadow-lg '>
        <div>
            <img src={LOGO} className='w-36'/>
        </div>
        <div className='nav-items'>
            <ul className='flex text-lg text-gray-600'>
                <Link to="/" className='p-6 '>Home</Link>
                <Link to="/about" className='p-6 '>About</Link>
                <Link to="/contact" className='p-6 '>Contact</Link>
                <Link to="/cart" className='p-6 '>Cart</Link>
                <button onClick={()=>btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </ul>
        </div>
        
    </div>
  )
}

export default Header