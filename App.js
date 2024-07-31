import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/body/Body'

const App = () =>{
    return (
        <div className='App'>
            <Header />
            <Body />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)