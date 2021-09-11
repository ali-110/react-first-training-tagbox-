import React, {Component} from 'react'
import { Button } from '../button'
import { HooksButton } from '../HooksButton'



    export class Comp2 extends Component{
constructor(props){
    super(props);
    this.state={
counter:0
    }
}
increamentfunc=(increamentVal)=>{

    this.setState({
counter:this.state.counter + increamentVal

    })
}
render(){
    const props = this.props
    return (
        <React.Fragment>
            <td>{props.index + 1}</td><td className="p-2">{props.name}</td><td>{props.name.length}</td><td>{props.names}</td><Button className={`btn btn-sm btn-warning m-1`} onclick={props.promoteCallBack} butname={`Promote ${props.name}`} counter={this.state.counter} increamentCounter={this.increamentfunc}></Button><HooksButton className={props.classname} onclick={props.reverseCallBack} butname={`Reverse (${props.name})`} className={`btn btn-sm btn-info m-1`} counter={this.state.counter} increamentCounter={this.increamentfunc}></HooksButton>

        </React.Fragment>
        )

}

    }
