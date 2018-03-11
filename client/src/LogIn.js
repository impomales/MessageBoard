import React, { Component } from 'react';

class LogIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        };
        
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleEmailInput(e) {
        this.setState({email: e.target.value});
    }
    
    handlePasswordInput(e) {
        this.setState({password: e.target.value}); 
    }
    
    handleSubmit() {
        this.props.logIn(this.state);
    }
    
    render() {
        return (
            <form className="log-in-form" onSubmit={this.handleSubmit}>
                <label>E-mail</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    onChange={this.handleEmailInput}/>
                <label>Password</label>
                <input 
                    type="text" 
                    name="password" 
                    id="password"
                    onChange={this.handlePasswordInput}/>
                <input type="submit" value="Log in" />
            </form>    
        );
    }
}

export default LogIn;