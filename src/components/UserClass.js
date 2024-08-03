import {Component} from "react"
class UserClass extends Component {
    constructor(props){
        super(props) //so that this props can be access anywhere inside my class

        this.state = {
            count: 1,
            count2: 0
        }
        
    }


    render(){
        const {name} = this.props;  //we can also destructure like this
        const {count, count2} = this.state; //state variable is destructured
        
        return(
                
                <div className="p-10 mt-5 border border-black user-card">
                <h1 className="p-2 text-3xl font-bold text-center ">UserClass</h1>
                <h2>Name : {name}</h2>   {/*you will always have to use this keyword inside a class
                
                */}
                <h3>Location : Coimbatore</h3>
                <h3>Contact: 9361605903</h3>
                <h1>Count : {count} - {count2}</h1>
                <button className="p-2 border border-black bg-slate-600" 
                onClick={()=>{
                    return this.setState({
                        count : count + 1,
                        
                    })
                }}>Click</button>
                
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
