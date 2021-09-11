import React, {Component} from "react";

export class RelationButton extends Component{
render(){

return(
<div>
    <button className="btn btn-info m-1 " onClick={this.props.onclickfunction}>click me!</button>
</div>
)

}


} 