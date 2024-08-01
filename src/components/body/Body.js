import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { API_URL } from '../../utils/constants'
import ShimmerUI from './ShimmerUI'


const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState([])

  
  

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async() => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  //conditional rendering
  if(listOfRestaurants.length === 0) {
    return <ShimmerUI />
  }
  
  
    
  console.log('body rendered');
  return (
    <div className='body'>
    <div className='px-10 mt-5 mb-4'>
      <button className='p-2 bg-gray-300 rounded-lg cursor-pointer' 
        onClick={()=> {
          const filteredRestaurants = listOfRestaurants.filter((restaurant)=>restaurant.info.avgRatingString >= 4.5)
          //whenever my state variable changes react re-render a component
          setListOfRestaurants(filteredRestaurants)
        }}
      >Top Rated Restaurants</button>  
    </div>   
    <div className='flex flex-wrap justify-start px-8 '>
        {listOfRestaurants.map((restaurants)=>(
            <RestaurantCard  resdata={restaurants.info} key={restaurants.info.name}/>
        ))}
        
    </div>
    </div>
  )
}

export default Body