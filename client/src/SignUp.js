import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            username: '',
            password: '',
            imageUrl: ''
        };
        
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleImageUrlInput = this.handleImageUrlInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleEmailInput(e) {
        this.setState({email: e.target.value});
    }
    
    handleUsernameInput(e) {
        this.setState({username: e.target.value});
    }
    
    handlePasswordInput(e) {
        this.setState({password: e.target.value});
    }
    
    handleImageUrlInput(e) {
        this.setState({imageUrl: e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSignUp(this.state);
    }
    
    render() {
        return (
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <label>E-mail</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    onChange={this.handleEmailInput}/>
                <label>Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={this.handleUsernameInput}/>
                <label>Password</label>
                <input 
                    type="text" 
                    name="password" 
                    id="password"
                    onChange={this.handlePasswordInput}/>
                <label>Image URL</label>
                <input 
                    type="text" 
                    name="image" 
                    id="image"
                    onChange={this.handleImageUrlInput}/>
                <button>Sign me up!</button>
            </form>    
        );
    }
}

export default SignUp;