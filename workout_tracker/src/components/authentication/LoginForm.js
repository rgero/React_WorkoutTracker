import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

export const LoginForm = (onSubmit)=> 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <Container fluid="md">
            <Form onSubmit={onSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Text sm>E-Mail</InputGroup.Text>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text sm>Password</InputGroup.Text>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </InputGroup>
                <Button variant="outline-secondary" type="submit">
                    Sign In
                </Button>
            </Form>
        </Container>
    )


}