import { useEffect, useState } from "react";
import { API_URL } from "../constants";



const useRestaurantList = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([])
    const [searchText,setSearchText] = useState("");




    useEffect(()=>{

    fetchData();
    },[])


    const fetchData = async() => {
    try {
        const data = await fetch(API_URL);
        const json = await data.json();
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        //optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } catch (error) {
        console.log(error.message);
        
        
    }

    }
        return {
            listOfRestaurants,
            filteredListOfRestaurants,
            setFilteredListOfRestaurants,
            searchText,
            setSearchText
        }
    }

    export default useRestaurantList;