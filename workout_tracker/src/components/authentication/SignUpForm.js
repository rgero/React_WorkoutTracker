import React, {useState} from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export const SignUpForm = ({onSubmit})=> 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordSecond, setRetypePassword] = useState("");
    const [errMsg, setErrorMessage] = useState("")

    const trySignUp = async (event) => {
        event.preventDefault();
        if ( email === "" || password === "" || passwordSecond === "")
        {
            setErrorMessage("Please fill out the full form.");
            return;
        }
        if (passwordSecond !== password)
        {
            setErrorMessage("Passwords do not match.");
            return;
        }
        setErrorMessage("");
        await onSubmit({email, password});
    }

    return(
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col>
                    <h3>Sign Up</h3>
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
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                aria-label="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Re-enter password</Form.Label>
                            <Form.Control
                                aria-label="reentry"
                                type="password"
                                value={passwordSecond}
                                onChange={e => setRetypePassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit">
                            Sign Up
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