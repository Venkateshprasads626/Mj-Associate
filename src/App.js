import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Screens/Home'
import Aboutus from './Screens/Aboutus'



class App extends Component {
  render() {
    return(
      <div className="App" id="loader">
      

          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/Aboutus" component={Aboutus} />
    
          </Switch>
        </BrowserRouter>
        

  </div>
    );
  }
}

  

export default App;