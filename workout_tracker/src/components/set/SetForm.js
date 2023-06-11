import React, {useState} from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export const SetForm = ({set = {}, onSubmit})=> 
{
    const [reps, setReps] = useState(set.reps ? set.reps : "")
    const [weight, setWeight] = useState(set.weight ? set.weight : "");
    const [error, setError] = useState("")

    const processChange = (event, callback) => {

        // This will restrict it so it's only numbers. Can't input negative numbers either.
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            callback(amount);
        }
    }

    const processNewSet = (e) => {
        e.preventDefault();    
        if (reps === "")
        {
            setError("Error: Missing Reps")
            return;
        }

        let newSet = { reps, weight}
        onSubmit(newSet);
        setReps("");
        setWeight("");
        setError("");
    }

    return (
        <Container fluid="md">
            <Form onSubmit={processNewSet}>
                <Row md="4" className="justify-content-md-center align-items-md-center">
                    <Col md>
                        <FloatingLabel controlId="floatingWorkoutDate" label="Reps" className="mb-3">
                            <Form.Control 
                                type="text" 
                                aria-label="reps" 
                                value={reps} 
                                onChange={e => processChange(e, setReps)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingNotes" label="Weight" className="mb-3">
                            <Form.Control 
                                type="text" 
                                aria-label="weight" 
                                value={weight} 
                                onChange={e => processChange(e, setWeight)}
                            />
                        </FloatingLabel>
                    </Col>

                </Row>
                <Button className="float-end"
                    aria-label="setSubmit" 
                    variant="outline-secondary" 
                    type="submit"
                >
                    Add Set
                </Button>
            </Form>
            
            {/* Error Processing? Don't know if this is completely necessary */}
            { error ? (
                <Alert key='danger' variant='danger'>
                    {error}
                </Alert>
            ): ( null )}
        </Container>
    )
}