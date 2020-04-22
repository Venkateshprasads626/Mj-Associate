import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Screens/Home'
import About from './Screens/Aboutus/About'
import Mission from './Screens/Aboutus/Mission'
import Codeofethics from './Screens/Aboutus/Codeofethics';
import Vissionpage from './Screens/Aboutus/Vissionpage'

import Services from './Screens/Services'

class App extends Component {
  render() {
    return(
      <div className="App" id="loader">
      

          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Aboutus/About" component={About} />
            
            <Route  path="/Aboutus/Mission" component={Mission} />
            <Route path="/Aboutus/Codeofethics" component={Codeofethics} />
            <Route path="/Aboutus/Vissionpage" component={Vissionpage} />

            <Route path="/Services" component={Services} />
          </Switch>
        </BrowserRouter>
        

  </div>
    );
  }
}

  

export default App;