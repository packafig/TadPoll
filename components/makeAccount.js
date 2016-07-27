import React, { Component } from 'react';
import { render } from 'react-dom';

export default class MakeAccount extends Component {
  render() {
    return(
      <div className='container'>
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Create Account</button>
        <button type="submit" onClick={this.props.login}>Click here to Log In</button>
      </div>
    );
  }
}
