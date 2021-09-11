import React,{Component} from 'react'
import PropTypes from 'prop-types'
 export class Button extends Component{

    constructor(props){
super(props);
this.state={
    increamentVal:3,
    buttonClicked:false
}

    }
 

     render(){
        return(
            <button className={this.props.className} onClick={this.handleClick} >{this.props.butname}{this.props.counter}{this.state.buttonClicked && <div>buttonclicked</div>}</button>
            
                 )


     }

        
     handleClick=()=>{

        this.props.increamentCounter(3)
        this.setState({buttonClicked:true})



            this.props.onclick();
            
                }  
    
 }
 