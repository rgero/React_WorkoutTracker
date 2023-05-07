import React, {useState} from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export const LoginForm = ({onSubmit})=> 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrorMessage] = useState("");

    const trySignIn = async (event) => {
        event.preventDefault();
        if ( email === "")
        {
            setErrorMessage("Error: Missing e-mail");
            return;
        }

        if ( password === "")
        {
            setErrorMessage("Error: Missing password");
            return;
        }
        setErrorMessage("");
        await onSubmit({email, password});
    }

    return(
        <Container fluid="md">
            <Row>
                <Col xs lg="3">
                    <Form onSubmit={trySignIn}>
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
                        <Button variant="outline-secondary" type="submit">
                            Log In
                        </Button>
                        { errMsg ? 
                            (
                                <Container className="pt-4">
                                    <Alert variant='danger'>{errMsg}</Alert>
                                </Container>
                            ) : null
                        }
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}