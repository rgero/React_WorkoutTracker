import React from 'react';
import Container from 'react-bootstrap/Container';
import { LoginForm } from './LoginForm';


export const LoginPage = ()=> 
{
    return (
        <Container fluid="md">
            <h1>Login</h1>
            <LoginForm/>
        </Container>
    )
}