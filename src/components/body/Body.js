
import RestaurantCard from './RestaurantCard'

import ShimmerUI from './ShimmerUI'
import { Link } from 'react-router-dom'
import useRestaurantList from '../../utils/customhooks/useRestaurantList'
import useOnlineStatus from '../../utils/customhooks/useOnlineStatus'


const Body = () => {
  const {
    listOfRestaurants,
    filteredListOfRestaurants,
    setFilteredListOfRestaurants,
    searchText,
    setSearchText} = useRestaurantList(); //custom hook
  
  const onlineStatus = useOnlineStatus();//custom hook
  if(onlineStatus === false){
    return <h1 className='mt-10 font-bold text-center '>Looks like you are offline Please Check your Internet Connection</h1> //condition for online status
  } 
  if (listOfRestaurants.length === 0) return <ShimmerUI />;
  return (
    <div className='body'>
    <div className='flex gap-2 px-10 mt-5 mb-4'>
      <div>
        <input type='text' className='border border-black' value={searchText} onChange={(event)=>setSearchText(event.target.value)}/>
        <button className='p-2 ml-2 bg-gray-300 rounded-lg cursor-pointer' 
        onClick={()=>{
          //filter the restaurant cards and update the UI
          //searchText
          console.log(searchText);
          const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText));
          setFilteredListOfRestaurants(filteredRestaurant);
        }}
        >Search</button>
      </div>  
      
      <button className='p-2 bg-gray-300 rounded-lg cursor-pointer' 
        onClick={()=> {
          const filteredRestaurant = listOfRestaurants.filter((restaurant)=>restaurant.info.avgRatingString >= 4.5)
          //whenever my state variable changes react re-render a component
          setFilteredListOfRestaurants(filteredRestaurant)
        }}
      >Top Rated Restaurants</button>
    </div>   
    <div className='flex flex-wrap justify-start px-8 '>
        {filteredListOfRestaurants.map((restaurants)=>(
            <Link 
            key={restaurants.info.id} 
            to={"/restaurants/" + restaurants.info.id} >
              <RestaurantCard  resdata={restaurants.info}/>
            </Link>
        ))}
        
    </div>
    </div>
  )
}

export default Body