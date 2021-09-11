//import logo from './logo.svg';
import './App.css';
import {Comp2}  from './Components/comp2';
import Comp1 from './Components/comp1';
import ReactDOM from "react-dom";
import {Callback} from './callBack' 
import {NewButton} from './Components/newButton'
import {ExternalB} from './Components/externalbutton'
import {RelationButton} from './Components/composing applications/button'
import { Message } from './Components/composing applications/message';
import { props } from 'bluebird';
import React , {Component} from 'react'
import { ThemeCont } from './Components/composing applications/themeContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import displayProduct from './Components/displayProducts';





export default class App extends Component{
  onChange = (event) => {
    this.setState({value:event.target.value})
  
  };
  constructor(props){
  super(props);
    this.state={
      counter:0,
      theme:'primary',
      value:""
    }
    this.themes = ["primary","secondary", "success", "warning", "dark"]
    this.handleChange = this.handleChange.bind(this)
  }

  clickFunction=()=>{
    this.setState({
      counter:this.state.counter + 1
    })

  }

 handleChange(event){
this.setState({theme:event.target.value})
  }
render(){



return (
    <div className="App">
      
     <div className="col-md-12 bg-prpl header">
     <div class="text-right   col-md-2"><img src="./logo4.png"></img></div>
     <div class="  col-md-8"></div>
     <div class="text-left   col-md-2"><i class="fas fa-sign-in-alt"></i>
</div>
     </div>
      <Router>
        
        <div className="col-md-12 p-0">
        <div className="rightmenu col-md-2   bg-prpl-1 text-right ">
      <div className="topMenu"><Link className="d-block" to="./"><button className="btn text-light bg-prpl-1 w-100 text-right">صفحه اصلی</button></Link><Link className="d-block" to="/displayProduct"><button className="btn text-light bg-prpl-1 w-100 text-right">فرم</button></Link></div>
      </div>
      <Switch>
      <div className=" col-md-10">

      <Route path='/displayProduct' component={displayProduct} />
      <ThemeCont>
 
    <div className="d-none">

    <div className={`bg-${this.state.theme}`}>{`bg-${this.state.theme}`} بک گراند این تغییر میکنه</div>
    <Message message={`counter is: ${this.state.counter}`} />
    <RelationButton onclickfunction={this.clickFunction}/>
    <select value={this.state.theme} onChange={this.handleChange}>
    {this.themes.map(themes=><option value={themes}>{themes}</option>)}
    </select>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    کدوم رنگ
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {this.themes.map(themes=><a class="dropdown-item" href="#">{themes}</a>)}
      </div>
    </div>

    </div>
    </ThemeCont>
    </div>
    </Switch>

    </div>  

    </Router>
    </div>
  );
}
}

