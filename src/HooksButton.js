import React, {useState} from 'react'


export function HooksButton(props){
//const [counter,counterButton] = useState(0)
const [buttonClicked,buttonClickedChanged] = useState(false)
   return(
    <button className={props.className} onClick={()=>handleClick()} >{props.butname}{props.counter}{buttonClicked && <div>buttonclicked</div>}</button>
   ) 

   function handleClick(){
   
        props.increamentCounter(4)

   

    buttonClickedChanged(true)
    props.onclick();
               
                   }  
}