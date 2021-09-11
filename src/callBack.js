import React from 'react'
import { Button } from './button'

export function Callback(props){
    let {theme, ...childprops} = props
return(
    <Button {...childprops} className={`m-2 btn btn-${props.classname}`}></Button>
)
    

}
Callback.defaultProps={
    butname:"Promote",
    classname:"primary"

}
