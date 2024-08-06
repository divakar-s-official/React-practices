import React, { useState } from 'react'
import ItemList from '../ItemList';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    const {title, itemCards} = data;

    function handleClick(){
      setShowIndex()
      
    }
    
  return (
    <div>
        {/* Acordion header */}
        <div className='w-6/12 p-4 mx-auto my-4 shadow-xl cursor-pointer bg-gray-50' onClick={handleClick}>
            <div className='flex justify-between '>
            <span className='text-xl font-bold'>{title} ({itemCards.length})</span>
            <span>{showItems ? "🔺" : "🔻" }</span>
            </div>
            {/* Accordion Body */}
            {showItems && <ItemList items={itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory;

//when it had its own state now its an uncontrolled componentd