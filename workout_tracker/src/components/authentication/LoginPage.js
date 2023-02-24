import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Navigate } from "react-router-dom";
import {Context as AuthContext} from '../../context/AuthContext';

import { LoginForm } from './LoginForm';


export const LoginPage = ()=> 
{
    const {state, signIn, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

    useEffect(()=> {
        tryLocalSignin();
    }, [])

    if (state.token)
    {
        clearErrorMessage();
        return (<Navigate replace to="/dashboard" />);
    } else 
    {
        return (
            <Container fluid="md">
                <h1>Login</h1>
                <LoginForm
                    errorMessage={state.errorMessage}
                    onSubmit={({email, password})=> signIn({email, password})}
                />
            </Container>
        )
    }
}