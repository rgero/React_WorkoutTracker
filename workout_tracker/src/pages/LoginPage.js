import React, { useContext, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { Navigate } from "react-router-dom";
import {Context as AuthContext} from '../context/AuthContext';
import { LoginForm } from '../components/authentication/LoginForm';



export const LoginPage = ()=> 
{
    const {state, signIn, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

    useEffect(()=> {
        const tryToSignIn = async () => {
            await tryLocalSignin();
            if (state.token)
            {
                clearErrorMessage();
            }
        }

        tryToSignIn();
    }, [])

    if (state.token)
    {
        return (<Navigate replace to="/dashboard" />);
    } else 
    {
        return (
            <Container fluid="md">
                <h1>Log in to the Workout Tracker</h1>
                <LoginForm
                    errorMessage={state.errorMessage}
                    onSubmit={({email, password})=> signIn({email, password})}
                />
                { state.errorMessage ? (
                    <Container className="pt-4">
                        <Alert variant='danger'>Error: {state.errorMessage}</Alert>
                    </Container>
                ) : null
            }
            </Container>
        )
    }
}