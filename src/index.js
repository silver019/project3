import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import { Manager, Reference, Popper } from 'react-popper';
import { render } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

  import Matchmaker from './Components/Matchmaker/Matchmaker';
  import Home from './Components/Home/Home';
  import NotFound from './NotFound';


ReactDOM.render(
    (<Router>
        <App>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/matchmaker" component={Matchmaker}/>
            <Route component={NotFound}/>
            </Switch>
        </App>
    </Router>
    ), document.getElementById('root'));
registerServiceWorker();
