import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

const Form = (props) => {
    if (props.signUpTab) return <SignUp />;
    else return <LogIn handleLogIn={props.logIn}/>;
};

export default Form;