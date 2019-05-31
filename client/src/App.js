import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import './Components/GlobalCSS/GlobalCSS.css';

import HomePage from './Pages/HomePage/HomePage';
import DataCenter from './Pages/DataCenter/DataCenter';
import Lineup from './Pages/Lineup/Lineup';
import Analytics from './Pages/Analytics/Analytics';
import Login from './Pages/Login/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
            <Switch>  
                <Route exact path='/' component={ HomePage }/>
                <Route exact path='/datacenter' component={ DataCenter }/>
                <Route exact path='/lineup' component={ Lineup }/>
                <Route exact path='/analytics' component={ Analytics }/>
                <Route exact path='/login' component={ Login }/>
            </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
