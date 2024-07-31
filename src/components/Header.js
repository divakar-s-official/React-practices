import React from 'react'
import LOGO from '../../public/LOGO.png'

const Header = () => {
  return (
    <div className='flex items-center justify-between shadow-lg px-8 '>
        <div>
            <img src={LOGO} className='w-36'/>
        </div>
        <div className='nav-items'>
            <ul className='flex text-lg text-gray-600'>
                <li className='p-6 '>Home</li>
                <li className='p-6 '>About</li>
                <li className='p-6 '>Contact</li>
                <li className='p-6 '>Cart</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header