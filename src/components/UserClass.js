import {Component} from "react"
import { GITHUB_API } from "../utils/constants";

class UserClass extends Component {
    constructor(props){
        
        
        super(props) //so that this props can be access anywhere inside my class

        console.log(this.props.name + "child constructor " );
        this.state = {
            userInfo : {}
        }
        
    }
    async componentDidMount(){
        console.log(this.props.name + "child component Did Mount " );
        //It is used to make an api call

        //Api call
        const data = await fetch(GITHUB_API);
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
        
        
        
        
    }

    componentDidUpdate(){
        console.log('component did update');
        
        
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }


    render(){
        
        console.log( this.props.name + "child render " )
        
        const {avatar_url, created_at} = this.state.userInfo;  //we can also destructure like this
        
        
        
        return(
                
                <div className="p-10 mt-5 border border-black user-card">
                <h1 className="p-2 text-3xl font-bold text-center ">UserClass</h1>
                <img src={avatar_url}/>
                <h2>Name : {this.state.userInfo.name}</h2>   {/*you will always have to use this keyword inside a class
                
                */}
                <h3>Location : Coimbatore</h3>
                <h3>Contact: 9361605903</h3>
                <h4>{created_at}</h4>
                
            </div>
            
        );
    }

}
export default UserClass;


// class Based component is a class which has a render  method which returns some piece of JSX

//why we write super()  for my reference

// 1.  Inheritance and super: In JavaScript, the super keyword is used to call functions on an object's parent class. When you create a class-based component in React, your component class extends React.Component. This means your class inherits from React.Component, and you need to call the parent class's constructor when defining your own constructor.

// 2.  Passing props to the Parent Class: React.Component has its own constructor that expects props as an argument. By calling super(props), you ensure that the props are passed to the parent class's constructor. This is necessary for the props to be available in this.props within your component.

// 3.  Access to this.props: If you don't call super(props) in the constructor, this.props will be undefined in your component, leading to potential bugs and issues when trying to access props.


