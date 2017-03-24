import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import reducer from './reducer';
import {setState} from './action_creators';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import App from './components/App';

const routes = <Route component={App}>
  <Route path="/" component={VotingContainer}/>
  <Route path="/results" component={ResultsContainer}/>
</Route>;

const store=createStore(reducer);
const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state=>
  store.dispatch(setState(state))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);