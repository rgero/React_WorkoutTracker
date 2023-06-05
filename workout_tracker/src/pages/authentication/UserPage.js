import React from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {Context as AuthContext} from '../../context/AuthContext';

export const UserPage = () => {
    const {state, tryLocalSignin} = React.useContext(AuthContext);

    React.useEffect(()=> {
        tryLocalSignin();
    }, [])

    return (
        <Container className="pt-3">
            <Row>
                <Col><h2>User Profile</h2></Col>
            </Row>
            <Row>
                <Col>
                    Display Name
                </Col>
                <Col>
                    {state.displayName}
                </Col>
            </Row>
            <Row>
                <Col>
                    E-Mail
                </Col>
                <Col>
                    {state.email}
                </Col>
            </Row>
        </Container>
    );
};

export default UserPage;