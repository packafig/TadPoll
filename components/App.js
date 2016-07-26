import { } from 'react-bootstrap';
import React, { Component } from 'react';
import { render } from 'react-dom';
// import Data from './data';
import makeAccount from './makeAccount';

export default class App extends Component {
  render() {
    return (
      <div>
        <makeAccount />
      </div>
    );
  }
}

render(<App />, document.getElementById('main-container'));
