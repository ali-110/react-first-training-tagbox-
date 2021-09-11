import React , {Component} from 'react'
import Comp2 from './comp2'
import {NewButton} from './newButton'



export default class comp1 extends Component{
constructor(props){
super(props)
this.state={
    counter : 0,
    textnumber:0,
    theme:"info",
    context:"برای تغییر رنگ کلیک کن!"
}
//this.changeTextFunc = this.changeTextFunc.bind(this)
}
changeColor = ()=>{
    if(this.state.theme === "info" ){
        this.setState({
            theme : "primary"
        })
    }else{
        this.setState({
            theme : "info"
        })
    }
    
    }

    changeTextFunc=(eee,theme)=>{
        //alert(eee.type)
        if(eee.type==="onMouseDown"){
            alert("onMouseDown")
        }else if(eee.type==="onMouseEnter"){
            alert("onMouseEnter")
        }
        this.setState({
        counter : this.state.counter + 1,
        theme:theme},()=>this.setState({textnumber : this.state.counter})
        )
        
    }

    handleClick = (e,event)=>{
        console.log(`type is: ${e.type} , target is: ${e.target.tagName}, current target name is: ${e.currentTarget.tagName}`);
        if(event){
            console.log('this is capture phase');

        }else if(e.bubbles && e.target !== e.currentTarget){
            console.log('this is bubble phase');

        }

    }


    render(){


return(
    <div className="m-2" onClick={this.handleClick} onClickCapture={(e)=>this.handleClick(e,true)}>                                                                                                                                                                                                                
    <input className={`bg-${this.state.theme}`} value={this.state.textnumber}/>
    <button className="form-control m-2 " onClick={this.handleClick}  >click me blue</button>
    <button className="form-control m-2 " onClick={(e)=>this.changeTextFunc(e,"danger")}  >click me red</button>
    <NewButton onclick={this.changeColor} context={this.state.context} theme={this.state.theme} />  
    </div>
)

    }

}