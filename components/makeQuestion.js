'use strict';

import React from 'react';
import PollModel from './database/Models/PollModel'

class MakeQuestion extends React.Component {

  _questionChange(e) {
    this.setState({question: e.target.value})
  }

  _titleChange(e) {
    this.setState({title: e.target.value})
  }

  _createQuestion() {
    return {title: this.state.title,
      question: this.state.question,
    };
  }

  render() {
    return (
      <div className="question-div">
      Enter the title for your question
      <input type="text" className="title-input" placeholder="title" onChange={_titleChange}/>
      Enter a yes/no question here
      <input type="text" className="question-input" placeholder="question" onChange={_questionChange}/>
      <button type="button" onClick={this._createQuestion} className="save-btn">Save Question</button>
      </div>
    )
  }
}
export default MakeQuestion
