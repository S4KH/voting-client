import React, { Component } from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 days later');
const tally = Map({'Trainspotting': 5, '28 days later': 4});

export default class App extends Component {
  render() {
    return (
      this.props.children
    );
  }
}
