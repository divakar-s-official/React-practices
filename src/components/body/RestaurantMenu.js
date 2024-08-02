

import React, { useEffect, useState } from 'react'
import { MENU_API } from '../../utils/constants';
import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router';

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();  // use to access URL parameters of the current route for dynamic routing
    console.log(resId);
    
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        try {
            const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            console.log(json);
            setResInfo(json.data)
        
        } catch (error) {
            console.log(error);
        }
    }
    
    if(resInfo === null) return <ShimmerUI />
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card;
    console.log(itemCards.length);
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

export default RestaurantMenu