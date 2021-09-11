import React, {Component} from 'react'


export default class FormPageProductsRow extends Component{

render(){

let p = this.props.productss
return(
  (this.props.selname == "" || this.props.selname.includes(p.name) ) && (this.props.selprovince == "" || this.props.selprovince.includes(p.province)) && (this.props.selcity == "" || this.props.selcity.includes(p.city))  ?
    <tr>
      <th scope="row">{p.id}</th>
      <td>{p.name}</td>
      <td>{p.province}</td>
      <td>{p.city}</td>
      <td>{p.price}</td>
      <td>{p.date}</td>
    </tr>
: ""
)

}



}