// import { } from 'react-bootstrap';
import React, { Component } from 'react';
import { render } from 'react-dom';
// import Data from './data';
import MakeAccount from './makeAccount';
import Login from './login';
import Question from './question';
import MakeQuestion from './makeQuestion';
import AskPage from './AskPage';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollInfo: {
        title: "",
        questions: [],
        secret: ""
      },
      questions: [],
      showLogin: true,
      userName: "",
      password: "",
      testLogins: {
        yandri: 'ilovetesting',
        colin: 'ilovetesting',
        allison: 'ilovetesting'
      },
      currentUser: "",
      questionsPage: false,
      askQuestionsPage: false
    };
    this.loginCreateAccPageSwitch = this.loginCreateAccPageSwitch.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.login = this.login.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.createPoll = this.createPoll.bind(this);
    this.createSecret = this.createSecret.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.goToHomepage = this.goToHomepage.bind(this);
    this.goToQuestionsPage = this.goToQuestionsPage.bind(this);
  }

  loginCreateAccPageSwitch() {
    if (this.state.showLogin) {
      this.setState({showLogin: false});
    } else {
      this.setState({showLogin: true});
    }
  }

  login() {
    let userName = this.state.userName;
    let password = this.state.password;

    if((userName in this.state.testLogins) && (password === this.state.testLogins[userName])) {
       alert("your in!");
       this.setState({currentUser: userName});
       this.setState({questionsPage: true});
    } else {
      alert('Wrong login credentils. Try again!');
    }

  }

  createAccount() {
    let userName = this.state.userName;
    let password = this.state.password;

    if( userName in this.state.testLogins ) {
       alert('That USERNAME already exists, Try Loggin In!');
    } else {
      this.state.testLogins[userName] = password;
      alert('Account Created, Please try loggin in!');
    }

    this.setState({showLogin: true});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleUserName(e) {
    this.setState({userName: e.target.value});
  }

  addQuestion() {
    var question = $('.question').val();
    this.state.questions.push(question);
    $('.question').val("");
  }


  createSecret(key) {
    return (key.slice(0, 3) + (this.state.currentUser.length * Math.floor(Math.random() * (1000 - 1) + 1) * key.length))
  }

  createPoll() {
    var title = $('.poll-title').val();
    var secret = this.createSecret(title);
    var questions = this.state.questions;

    this.state.pollInfo = {
      title: title,
      questions: questions,
      secret: secret
    }

    this.state.questions = [];
    $('.secret-inject').html('Your SUPER SECRET access code is ---->>> ' + secret + ' <<<---');

    $.post('http://localhost:3000/', JSON.stringify(this.state.pollInfo));

    $('.poll-title').val("");
    $('.question').val("");
    console.log(this.state.pollInfo);
  }

  getQuestions() {
    let secret = this.state.pollInfo.secret;
    let secretInput = $('.secretInput').val();

    if(secret === secretInput) {
      let domDiv = $('.questionsContainer');
      let title = this.state.pollInfo.title;
      let questions = this.state.pollInfo.questions

      domDiv.append('<h1>'+title+'</h1>');
      questions.forEach(function(question){

        domDiv.append('<h3>'+question+'</h3>')
        domDiv.append('<input type="radio" name="id" value="Yes">')
        domDiv.append('<input type="radio" name="id" value="No">')
      });

      domDiv.append('<input type="submit"/>')
    } else {
      alert("Your SECRET CODE is not correct, try again!");
    }

  }

  goToHomepage() {
    this.setState({questionsPage: false});
  }

  goToQuestionsPage() {
    this.setState({askQuestionsPage: true});  
  }

  render() {
    if(this.state.askQuestionsPage) {
      console.log('hi');
      return (
        <div>
          <AskPage showQuestions={this.getQuestions}/>
        </div>
      );
    } else if (this.state.questionsPage) {
      return (
        <div>
          <MakeQuestion createPoll={this.createPoll} addQuestion={this.addQuestion} user={this.state.currentUser} goHome={this.goToHomepage}/>
        </div>
      );
    } else if (this.state.showLogin) {
      return (
        <div>
          <Login login={this.login} makeAcc={this.loginCreateAccPageSwitch} userName={this.handleUserName} password={this.handlePassword} questionsPage={this.goToQuestionsPage}/>
        </div>
      );
    } else {
      return (
        <div>
          <MakeAccount login={this.loginCreateAccPageSwitch} userName={this.handleUserName} password={this.handlePassword} createAcc={this.createAccount}/>
        </div>
      );
    }
  }
}

render(<App />, document.getElementById('main-container'));
