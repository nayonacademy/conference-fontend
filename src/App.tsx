import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard/index";
class App extends Component { 
  render() { 
    return ( 
       <Router> 
           <div className="App"> 
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/login' component={Login}></Route> 
              <Route exact path='/dashboard' component={Dashboard}></Route>
            </Switch> 
          </div> 
       </Router> 
   ); 
  } 
} 
  
export default App; 