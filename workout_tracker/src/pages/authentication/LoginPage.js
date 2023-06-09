import React, { useContext, useEffect } from 'react';
import { Navigate } from "react-router-dom";

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {Context as AuthContext} from '../../context/AuthContext';
import { LoginForm } from '../../components/authentication/LoginForm';

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
            <Container>
                <Row>
                    <Col md={8} className="d-none d-lg-block">
                        <img src="/images/dumbbells.jpg" width="100%" />
                    </Col>
                    <Col xs={10} md={4}>
                        <LoginForm
                            onSubmit={({email, password})=> signIn({email, password})}
                        />
                        { state.errorMessage ? (
                                <Container className="pt-4">
                                    <Alert variant='danger'>Error: {state.errorMessage}</Alert>
                                </Container>
                            ) : null
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LoginPage;