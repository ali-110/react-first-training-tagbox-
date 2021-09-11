import React , {Component} from 'react'
let ExternalCounter = 0 
export class ExternalB extends Component{

    ExternalB = () =>{
        ExternalCounter++
        this.forceUpdate()          
        }
componentDidMount(){
    console.log("ExternalComp add contents to DOM");
}
componentDidUpdate(){
    console.log("Update externalComp Comp");
    ExternalCounter++
}
    render(){


        return(
            <div className="col-4">
            <button onClick={this.ExternalB}>External B</button>
            <div>counter number is: {ExternalCounter}</div>
            </div>)
    }

}