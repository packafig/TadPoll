// import { } from 'react-bootstrap';
import React, { Component } from 'react';
import { render } from 'react-dom';
// import Data from './data';
import MakeAccount from './makeAccount';

export default class App extends Component {
  render() {
    return (
      <div>
        <MakeAccount />
      </div>
    );
  }
}

render(<App />, document.getElementById('main-container'));
