import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';

import {Context as AuthContext} from '../../context/AuthContext';

import { LoginForm } from './LoginForm';


export const LoginPage = ()=> 
{
    const {state, signIn, clearErrorMessage} = useContext(AuthContext);

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