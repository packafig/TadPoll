import React, { Component } from 'react';
import { render } from 'react-dom';

export default class AskPage extends Component {
  render() {
    return(
      <div className='container'>
        <input type="text" className='secretInput' placeholder="Enter Secret Code.." required />
        <button type="submit" onClick={this.props.showQuestions}>Open Poll Questions</button>
        <div className='questionsContainer'></div>
      </div>
    );
  }
}