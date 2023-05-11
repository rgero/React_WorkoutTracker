import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {Context as AuthContext} from '../../context/AuthContext';
import { SignUpForm } from '../../components/authentication/SignUpForm';

export const SignUpPage = ()=> 
{
    const navigate = useNavigate();
    const {state, signUp} = useContext(AuthContext);

    if (state.token)
    {
        navigate('/dashboard');
    } else 
    {
        return (
            <Container fluid="md">
                <Row>
                    <Col>
                        <SignUpForm onSubmit={({email, password})=> signUp({email, password})}
                    />
                    </Col>
                </Row>

            </Container>
        )
    }
}