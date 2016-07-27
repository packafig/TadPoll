import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    console.log(this.props.makeAcc)
    return (
      <div className="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Login</button>
        <button onClick={this.props.makeAcc}>Create Account</button>
      </div>
    );
  }
}
