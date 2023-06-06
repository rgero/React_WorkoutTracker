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
        <Container className="pt-3">
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