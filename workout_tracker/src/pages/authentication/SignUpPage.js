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
            <Container className="pt-2" fluid="xl">
                <Row>
                    <Col xs={4}>
                        <SignUpForm onSubmit={({email, password})=> signUp({email, password})}/>
                    </Col>
                    <Col xs={8}>
                        <img src="/images/dumbbells.jpg" width={800} />
                    </Col>
                </Row>

            </Container>
        )
    }
}