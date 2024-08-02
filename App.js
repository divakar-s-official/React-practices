import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/body/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Cart from './src/components/Cart'
import Error from './src/components/Error'
import RestaurantMenu from './src/components/body/RestaurantMenu'

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
                element: <About />
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