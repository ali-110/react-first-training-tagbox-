import React , {Component} from 'react'

export class ThemeCont extends Component{


    render(){
return(
    <div className="bg-white">
        <div className="bg-light">
        {this.props.children}
        </div>
    </div>

)

    }


}