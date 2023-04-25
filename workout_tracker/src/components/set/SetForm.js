import React, {useState} from 'react';

import '../../styles/components/inputs.css'

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
        <Container>
            <Form onSubmit={processNewSet}>
                <InputGroup className="d-flex align-items-center mb-3">

                    {/* Reps Section */}
                    <Form.Label className="fs-6 me-3" htmlFor="repInput">Reps</Form.Label>
                    <Form.Control type="text" id="repInput" value={reps} onChange={e => processChange(e, setReps)}/>

                    {/* Weight Section */}
                    <Form.Label className="fs-6 mx-3" htmlFor="weightInput">Weight</Form.Label>
                    <Form.Control type="text" id="weightInput" value={weight} onChange={e => processChange(e, setWeight)}/>

                    {/* Submit Button */}
                    <Button variant="outline-secondary" type="submit">
                        Add Set
                    </Button>
                </InputGroup>
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