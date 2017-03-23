import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Winner from './Winner';
import Tally from './Tally';

export default class Results extends Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  getPair(){
    return this.props.pair || [];
  }

  render() {
    return (
      this.props.winner ? <Winner ref="winner" winner={this.props.winner}/> :
      <div className="results">
        <Tally {...this.props} />
        <div className="management">
          <button ref="next" className="next" onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
