import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

export const SignUpForm = ({errorMessage, onSubmit})=> 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordSecond, setRetypePassword] = useState("");
    const [errMsg, setErrorMessage] = useState(errorMessage ? errorMessage : "")

    const trySignUp = async (event) => {
        event.preventDefault();
        if (passwordSecond !== password)
        {
            setErrorMessage("Passwords do not match");
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
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Password</InputGroup.Text>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Re-Enter Password</InputGroup.Text>
                    <Form.Control type="password" value={passwordSecond} onChange={e => setRetypePassword(e.target.value)}/>
                </InputGroup>
                <Button variant="outline-secondary" type="submit">
                    Sign In
                </Button>
                {errMsg ? (
                    <h4>{errMsg}</h4>
                ): null}
            </Form>
        </Container>
    )


}