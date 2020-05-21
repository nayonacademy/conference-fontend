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
import Profile from "./components/profile/index";
import CheckList from "./components/onboarding/checkListIndex";
import EventLocation from "./components/onboarding/eventLocatoinIndex";
import InformationCollection from "./components/onboarding/informationCollectionIndex";
class App extends Component { 
  render() { 
    return ( 
       <Router> 
           <div className="App"> 
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/login' component={Login}></Route> 
              <Route exact path='/dashboard' component={Dashboard}></Route>
              <Route exact path='/profile' component={Profile}></Route>

              <Route exact path='/onboarding/checklist' component={CheckList}></Route>
              <Route exact path='/onboarding/eventlocation' component={EventLocation}></Route>
              <Route exact path='/onboarding/information/collection' component={InformationCollection}></Route>
            </Switch> 
          </div> 
       </Router> 
   ); 
  } 
} 
  
export default App; 