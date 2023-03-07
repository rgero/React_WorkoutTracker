import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

import {Context as AuthContext} from '../context/AuthContext';

import { SignUpForm } from '../components/authentication/SignUpForm';


export const SignUpPage = ()=> 
{
    const navigate = useNavigate();
    const {state, signUp, clearErrorMessage} = useContext(AuthContext);

    if (state.token)
    {
        clearErrorMessage();
        navigate('/dashboard');
    } else 
    {
        return (
            <Container fluid="md">
                <h3>Sign Up for the Workout Tracker</h3>
                <SignUpForm
                    errorMessage={state.errorMessage}
                    onSubmit={({email, password})=> signUp({email, password})}
                />
            </Container>
        )
    }
}