import React, { Component } from 'react';
import NavBar from './NavBar';
import Form from './Form';
import * as apiCalls from './api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { signUpTab: true };
    
    this.setSignUp = this.setSignUp.bind(this);
    this.setLogIn = this.setLogIn.bind(this);
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  
  setSignUp() {
    this.setState({ signUpTab: true });
  }
  
  setLogIn() {
    this.setState({ signUpTab: false });
  }
  
  logIn(data) {
    
  }
  
  async signUp(data) {
    let res = await apiCalls.signUp(data);
    console.log(res);
  }
  
  render() {
    let signUpTab = this.state.signUpTab;
    
    return (
      <div className="App">
        <NavBar 
          signUpOption={this.setSignUp}
          logInOption={this.setLogIn} />
        <Form signUpTab={signUpTab} logIn={this.logIn} signUp={this.signUp}/>
      </div>
    );
  }
}

export default App;
