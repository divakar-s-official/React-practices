import React, { lazy,Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'

import Body from './src/components/body/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Contact from './src/components/Contact'
import Cart from './src/components/Cart'
import Error from './src/components/Error'
import RestaurantMenu from './src/components/body/RestaurantMenu'
import Grocery from './src/components/Grocery'

// import About from './src/components/About'
const About = lazy(()=>import('./src/components/About'));
const Grocery = lazy(()=>import('./src/components/Grocery'))

const App = () =>{
    
    return (
        <div className='App'>
            <Header />
            
            <Outlet />
        </div>
    )
}
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
                // element: <About />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resId", //  /:resId  this part of code is dynamic according to the id of the restaurant
                element: <RestaurantMenu />
            }
            
        ],
        errorElement : <Error />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={AppRouter}/>)