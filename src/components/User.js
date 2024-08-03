import { useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(1); //in functional we created a state variable like this
    const [count2,setCount2] = useState(0)
    return(
        <div className="p-10 border border-black user-card">
            <h1 className="p-2 text-3xl font-bold text-center ">User</h1>
            <h2>Name : {props.name}</h2>
            <h3>Location : Coimbatore</h3>
            <h3>Contact: 9361605903</h3>
            <h1>Count : {count}</h1>
            <button className="p-2 border border-black bg-slate-600" onClick={()=>setCount(count + 1)}>Click</button>
            
        </div>
    )
}

export default User;

//the functional component is basically a function that returns some piece of JSX

//whenever i say invoking the functions which means you are loading or mounting that function onto the webPage.