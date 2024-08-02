import React from 'react'
//using the useRouteError hook is giving the more information about the error.
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error.status} Not Found</h1>
      
    </div>
  )
}

export default Error