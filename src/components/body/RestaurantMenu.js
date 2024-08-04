
import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router';
import useRestaurantMenu from '../../utils/customhooks/useRestaurantMenu';

const RestaurantMenu = () => {
   
    const {resId} = useParams();  // use to access URL parameters of the current route for dynamic routing
    //console.log(resId)  
    
    const resInfo = useRestaurantMenu(resId); //custom hook  makes our code much cleaner
    
    if(resInfo === null) return <ShimmerUI />
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card;
    //console.log(itemCards.length);
  return (
    <div>
        <h1>{name}</h1>
        <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>
        
        <ul>
            {itemCards.map((item)=>(
                <li key={item.card.info.name}>{item.card.info.name} - {'₹' +item.card.info.price / 100}</li>
            ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu;