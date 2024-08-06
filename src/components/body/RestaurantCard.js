
import { CDN_LOGO } from '../../utils/constants'

const RestaurantCard = ({resdata}) => {
  
  return (
    
        <div className='p-2 w-60 h-76 hover:bg-gray-200 rounded-xl'>
            <div>
                <img className='object-cover w-full rounded-lg h-36' src={CDN_LOGO + resdata.cloudinaryImageId} alt='res-logo' />
            </div>
            <div className='flex flex-col justify-start h-32'>
                <h3 className='text-xl font-bold truncate'>{resdata.name}</h3>
                <h4 className='font-bold text-gray-800'>{resdata.avgRatingString}{'ratings'} - {resdata.sla.slaString}</h4>
                <h4 className='text-sm text-gray-800 truncate'>{resdata.cuisines.join(",")}</h4>
            </div>
            
            
            
            
            
            
    </div>
    
  )
}

// Higher order Component 
// export const withPromotedLabel = (RestaurantCard) => {
//   return(props) => {
//     return (
//       <>
//         <label className='absolute p-2 m-2 font-bold text-white bg-black bg-opacity-80 rounded-xl'>Open</label>
//         <RestaurantCard {...props}/>
//       </>
//     )
//   }
// }


export function withPromotedLabel1(RestaurantCard){
  return function(props){
    return(
      <div>
        <label className='absolute p-2 m-2 font-bold text-white bg-black bg-opacity-80 rounded-xl'>Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard


