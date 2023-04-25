import React, {useState} from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
            <Form onSubmit={trySignIn}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>E-Mail</InputGroup.Text>
                    <Form.Control
                        aria-label="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Password</InputGroup.Text>
                    <Form.Control
                        aria-label="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </InputGroup>
                <Button variant="outline-secondary" type="submit">
                    Sign In
                </Button>
                { errMsg ? 
                    (
                        <Container className="pt-4">
                            <Alert variant='danger'>{errMsg}</Alert>
                        </Container>
                    ) : null
                }
            </Form>
        </Container>
    )
}