import { useEffect, useState } from "react";
import { MENU_API } from "../constants";


 const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
   //the reponsibility is takes resId and return some information

   //fetchData
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

    return resInfo;
 }
 export default useRestaurantMenu;