// import { } from 'react-bootstrap';
import React, { Component } from 'react';
import { render } from 'react-dom';
// import Data from './data';
import MakeAccount from './makeAccount';
import Login from './login';
import Question from './question';


const yand = "yandriiii";
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
      showLogin: true
    };
    this.loginCreateAcc = this.loginCreateAcc.bind(this);
  }

  loginCreateAcc() {
    if (this.state.showLogin) {
      this.setState({showLogin: false});
    } else {
      this.setState({showLogin: true});
    }
  }

  render() {

    if (this.state.showLogin) {
      return (
        <div id="App">
          <Login makeAcc={this.loginCreateAcc}/>
        </div>
      );
    } else {
      return (
        <div id="App">
          <MakeAccount login={this.loginCreateAcc}/>
        </div>
      );
    }
  }
}

render(<App />, document.getElementById('main-container'));
