import React from 'react'
import { CDN_LOGO } from '../../utils/constants'

const RestaurantCard = ({resdata}) => {
  return (
    <div className=''>
        <div className='w-60 h-76 hover:bg-gray-200 p-2 rounded-xl'>
            <div>
                <img className='rounded-lg w-full h-36 object-cover' src={CDN_LOGO + resdata.cloudinaryImageId} alt='res-logo' />
            </div>
            <div className='flex flex-col h-32 justify-start'>
                <h3 className='font-bold text-xl truncate'>{resdata.name}</h3>
                <h4 className='text-gray-800 font-bold'>{resdata.avgRatingString}{'ratings'} - {resdata.sla.slaString}</h4>
                <h4 className='text-sm text-gray-800 truncate'>{resdata.cuisines.join(",")}</h4>
            </div>
            
            
            
            
            
            
    </div>
    </div>
  )
}

export default RestaurantCard