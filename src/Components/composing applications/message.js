import React, {Component} from 'react'

export class Message extends Component{

    render(){

return(
<div className="m-2 p-2 bg-warning col-md-5 text-center mx-auto">{this.props.message}</div>

)

    }
}