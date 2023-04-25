import React, {useState} from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


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
            <Form onSubmit={trySignUp}>
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
                <InputGroup className="mb-3">
                    <InputGroup.Text>Re-Enter Password</InputGroup.Text>
                    <Form.Control
                        aria-label="reentry"
                        type="password"
                        value={passwordSecond}
                        onChange={e => setRetypePassword(e.target.value)}
                    />
                </InputGroup>
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
        </Container>
    )
}