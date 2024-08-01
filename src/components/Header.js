import React, { useState } from 'react'
import LOGO from '../../public/LOGO.png'

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
                <li className='p-6 '>Home</li>
                <li className='p-6 '>About</li>
                <li className='p-6 '>Contact</li>
                <li className='p-6 '>Cart</li>
                <button onClick={()=>btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </ul>
        </div>
        
    </div>
  )
}

export default Header