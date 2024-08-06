import React, { useState } from 'react'
import { CDN_LOGO } from '../utils/constants';

const ItemList = ({items}) => {
    // console.log(items);
    
    
    const handleClick = () => {
        console.log('clicked');
        
    }
    
  return (
    <div>
        
            {items.map((item)=>(
               <div key={item.card.info.id} className='p-2 m-2 text-left border-b-2 border-gray-200'>
                    
                    <div className='flex justify-between'>
                    
                        <div>
                            <span>{item.card.info.name}{" - "}</span>
                            <span>₹{item.card.info.price / 100}</span>
                        </div>
                        <div className='relative w-3/12 '>
                            
                            <button className='absolute bottom-0 left-0 right-0 p-1 text-sm font-bold text-white bg-black rounded-lg shadow-lg'
                            onClick={handleClick}
                            >Add+</button>
                            
                            <img src={CDN_LOGO + item.card.info.imageId} className='w-full rounded-xl'/>
                        </div>
                        

                    </div>
                        <p className='py-4 text-xs'>{item.card.info.description}</p>
               </div> 
            ))}
        
    </div>
  )
}

export default ItemList