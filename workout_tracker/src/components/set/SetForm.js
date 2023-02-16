import React, {useState} from 'react';

import '../../styles/components/inputs.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SetForm = ({set = {}, onSubmit})=> 
{
    const [reps, setReps] = useState(set.reps ? set.reps : "")
    const [weight, setWeight] = useState(set.weight ? set.weight : "");
    const [error, setError] = useState("")

    const processChange = (event, callback) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            callback(amount);
        }
    }

    const processNewSet = (e) => {
        e.preventDefault();
        
        if (reps === "" || weight === "")
        {
            setError("Reps and Weight need to be populated");
            return;
        }

        let newSet = { reps, weight}
        setReps("");
        setWeight("");
        setError("");
        onSubmit(newSet);
    }

    return (
        <Form onSubmit={processNewSet}>
            <Form.Group className="mb-3">
                <Form.Label>Reps</Form.Label>
                <Form.Control type="text" value={reps} onChange={e => processChange(e, setReps)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" value={weight} onChange={e => processChange(e, setWeight)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}