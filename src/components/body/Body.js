import React from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurants } from '../../utils/constants'

const Body = () => {
  return (
    <div className='body'>
    <div className=''>Search</div>   
    <div className='flex flex-wrap  justify-start px-8'>
        {restaurants.map((restaurants)=>(
            <RestaurantCard resdata={restaurants.info} key={restaurants.name}/>
        ))}
        
    </div>
    </div>
  )
}

export default Body