import React, {useState} from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export const ChangeUserFormData = ({currentUser, onSubmit})=> 
{
    const [email, setEmail] = useState(currentUser ? currentUser.email : "");
    const [displayName, setName] = useState(currentUser ? currentUser.displayName : "");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRetype, setRetypePassword] = useState("");
    const [errMsg, setErrorMessage] = useState("")

    const trySignUp = async (event) => {
        event.preventDefault();
        if (currentPassword === "")
        {
            setErrorMessage("You need to fill out your current password");
        }

        if ( email === "" || displayName === "")
        {
            setErrorMessage("You must have an email and a display name.");
            return;
        }
        if (newPassword !== newPasswordRetype)
        {
            setErrorMessage("Passwords do not match.");
            return;
        }
        setErrorMessage("");

        let changes = {};
        if (newPassword !== "")
        {
            changes.password = newPassword;
        }
        changes.displayName = displayName;
        changes.email = email;

        await onSubmit(currentUser.email, currentPassword, changes);
    }

    return(
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col>
                    <h3>User Profile</h3>
                    <Form onSubmit={trySignUp}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                aria-label="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="displayName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control
                                aria-label="displayName"
                                type="text"
                                value={displayName}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control
                                aria-label="currentPassword"
                                type="password"
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Enter new password</Form.Label>
                            <Form.Control
                                aria-label="reentry"
                                type="password"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Re-enter new password</Form.Label>
                            <Form.Control
                                aria-label="reentry"
                                type="password"
                                value={newPasswordRetype}
                                onChange={e => setRetypePassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit">
                            Submit changes
                        </Button>
                        { errMsg ? 
                            (
                                <Container className="pt-4">
                                    <Alert variant='danger'>Error: {errMsg}</Alert>
                                </Container>
                            ) : null
                        }
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}