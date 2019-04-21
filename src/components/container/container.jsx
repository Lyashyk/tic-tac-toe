import React, { Component } from 'react';

import PlayGridAppContainer from '../../containers/play-grid-app-container';

import './container.css';

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <PlayGridAppContainer />
      </div>
    );
  }
}

export default Container;
