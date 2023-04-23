import React, {useState} from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const LoginForm = ({errorMessage, onSubmit})=> 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const trySignIn = async (event) => {
        event.preventDefault();
        await onSubmit({email, password});
    }

    return(
        <Container fluid="md">
            <Form onSubmit={trySignIn}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>E-Mail</InputGroup.Text>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Password</InputGroup.Text>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </InputGroup>
                <Button variant="outline-secondary" type="submit">
                    Sign In
                </Button>
            </Form>
            { errorMessage ? (
                    <Container className="pt-4">
                        <Alert variant='danger'>{errorMessage}</Alert>
                    </Container>
                ) : null
            }
        </Container>
    )
}