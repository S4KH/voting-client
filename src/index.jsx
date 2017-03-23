import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Voting from './components/Voting';
import Results from './components/Results';
import App from './components/App';

const routes = <Route component={App}>
  <Route path="/" component={Voting}/>
  <Route path="/results" component={Results}/>
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);