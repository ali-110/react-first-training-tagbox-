import React , {Component} from 'react'


export class NewButton extends Component{


    render(){

        return(<button onClick={this.props.onclick} className={`btn btn-${this.props.theme}`}>{this.props.context}</button>)
    }


}