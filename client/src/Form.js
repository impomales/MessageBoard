import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

const Form = (props) => {
    if (props.signUpTab) return <SignUp handleSignUp={props.signUp}/>;
    else return <LogIn handleLogIn={props.logIn}/>;
};

export default Form;