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
            <Container>
                <Row>
                    <Col xs={10} md={4}>
                        <SignUpForm onSubmit={({email, displayName, password})=> signUp({email, displayName, password})}/>
                    </Col>
                    <Col md={8} className="d-none d-lg-block">
                        <img src="/images/dumbbells.jpg" width="100%" />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default SignUpPage;