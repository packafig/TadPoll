import React, { Component } from 'react';
import { render } from 'react-dom';
import { } from 'react-bootstrap';

export default class MakeAccount extends Component {
  render() {
    return(
      <div className="container row" id="make-account">
        <div className="col-md-2"></div>
        <div className="row" id="username">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required />
        </div>
        <div className="row" id="pw">
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />
        </div>

        <button type="submit">Login</button>
      </div>
    );
  }
}
