import React, { Component } from 'react';
import NavBar from './NavBar';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { signUpTab: true };
    
    this.setSignUp = this.setSignUp.bind(this);
    this.setLogIn = this.setLogIn.bind(this);
    this.logIn = this.logIn.bind(this);
  }
  
  setSignUp() {
    this.setState({ signUpTab: true });
  }
  
  setLogIn() {
    this.setState({ signUpTab: false });
  }
  
  logIn(data) {
    
  }
  
  render() {
    let signUpTab = this.state.signUpTab;
    
    return (
      <div className="App">
        <NavBar 
          signUpOption={this.setSignUp}
          logInOption={this.setLogIn} />
        <Form signUpTab={signUpTab} logIn={this.logIn}/>
      </div>
    );
  }
}

export default App;
