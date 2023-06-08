import React from "react";

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {Context as AuthContext} from '../../context/AuthContext';
import { ChangeUserFormData } from "../../components/authentication/ChangeUserDataForm";

export const UserPage = () => {
    const {state, tryLocalSignin, changeUserData} = React.useContext(AuthContext);

    React.useEffect(()=> {
        tryLocalSignin();
    }, [])

    return (
        <Container fluid="md" className="pt-3">
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h3><strong>Current Info</strong></h3>
                </Col>
            </Row>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="2"><strong>Display Name</strong></Col>
                    <Col md="2">{state.displayName}</Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="2"><strong>Email</strong></Col>
                    <Col md="2">{state.email}</Col>
                </Row>
            </Container>
            <Row>
                <ChangeUserFormData currentUser={state} onSubmit={(email, password, changeData) => changeUserData({email, password, changeData})}/>
            </Row>
            { state.errorMessage ? (
                    <Container className="pt-4">
                        <Alert variant='danger'>Error: {state.errorMessage}</Alert>
                    </Container>
                ) : null
            }
        </Container>
    );
};

export default UserPage;