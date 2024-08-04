import {Component} from 'react'

import UserClass from './UserClass'

class About extends Component{
  constructor(props){
    console.log('parent constructor')
    super(props)
  }

  componentDidMount(){
    console.log('parent component Did Mount');
    
  }
  
  render(){
    console.log("parent render")
    return (
      <div className='p-5'>
        <UserClass name="first"/>
        <UserClass name="second"/>
        
      </div>
    )
  }
}

export default About