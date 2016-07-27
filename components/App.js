// import { } from 'react-bootstrap';
import React, { Component } from 'react';
import { render } from 'react-dom';
// import Data from './data';
import MakeAccount from './makeAccount';
import Login from './login';
import Question from './question';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: {
        0: 'Apples or oranges?',
        1: 'Dogs or cats?',
        2: 'Monkeys or Chimpanzees?',
        3: 'Orangutans or Lemurs?',
        4: 'Hippos or Bears?',
      },
      showLogin: false,
      showMakeAccount: true,
    };
  }

  render() {
    return (
      <div id="App">
        <div><MakeAccount /></div>
        <div><Login /></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('main-container'));
