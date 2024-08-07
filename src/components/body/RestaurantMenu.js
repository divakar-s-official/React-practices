
import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router';
import useRestaurantMenu from '../../utils/customhooks/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
   
    const {resId} = useParams();  // use to access URL parameters of the current route for dynamic routing
    // console.log(resId)  
    
    const resInfo = useRestaurantMenu(resId); //custom hook  makes our code much cleaner
    
    const [showIndex,setShowIndex] = useState(); //managing state =  parent level for all accordion restaurant category
    if(resInfo === null) return <ShimmerUI />
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards.length);
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    
    //filter out item category
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                      .filter(c=>c.card?.card?.["@type"] === 
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                  
    // console.log(categories);
    
    
  return (
    <div className='text-center'>
        <h1 className='my-6 text-2xl font-bold'>{name}</h1>
        <p className='font-bold'>{cuisines.join(" , ")} - {costForTwoMessage}</p>
        {/* categories accordions */}
        {categories.map((category, index)=>{
          return <RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card} 
          showItems={index=== showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
          />
        }
        )}
    </div>
  )
}

export default RestaurantMenu;

//this restaurant menu controlling this restaurant category now this is controlled component
