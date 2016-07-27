import React, { Component } from 'react';
import { } from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (
      <div className="container row">
        <div className="col-md-2"></div>
        <label><b>Username</b></label>
        <input onChange={this.props.userName} type="text" placeholder="Enter Username" name="uname" required />

        <label><b>Password</b></label>
        <input onChange={this.props.password} type="password" placeholder="Enter Password" name="psw" required />

        <button onClick={this.props.login} type="submit">Login</button>
        <button onClick={this.props.makeAcc}>Create Account</button>
        <button onClick={this.props.questionsPage}>Go to Answer Poll</button>
      </div>
    );
  }
}
