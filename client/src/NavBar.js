import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }
    
    handleSignUp() {
        this.props.signUpOption();
    }
    
    handleLogIn() {
        this.props.logInOption();
    }
    
    render() {
        return (
            <div className="nav-bar">
                <h1>Message Board</h1>
                <button onClick={this.handleSignUp}>Sign up</button>
                <button onClick={this.handleLogIn}>Log in</button>
            </div>    
        );
    }
}

export default NavBar;