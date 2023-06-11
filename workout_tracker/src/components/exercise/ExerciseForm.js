import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { SetForm } from '../set/SetForm';
import { SetList } from '../set/SetList';

export const ExerciseForm = ({exercise = {}, onSubmit})=> 
{
    const [setList, setSetList] = React.useState(exercise.setList ? exercise.setList : []);
    const [muscleGroup, setMuscleGroup] = React.useState(exercise.muscleGroup ? exercise.muscleGroup : "");
    const [name, setExerciseName] = React.useState(exercise.name ? exercise.name : "");
    const [notes, setNotes] = React.useState(exercise.notes ? exercise.notes : "");
    const [errMsg, setError] = React.useState("");

    const addSet = (set) => {
        setSetList([...setList, set]);
    }
    
    const deleteSet = (index) => {
        let newSetList = setList;
        newSetList.splice(index, 1);
        setSetList( [...newSetList] );
    }

    const processExercise = (e) => {
        e.preventDefault();

        if (name === "")
        {
            setError("Missing exercise name");
            return;
        }
        if (setList.length === 0)
        {
            setError("Missing set list");
            return;
        }

        const newExercise = { name, muscleGroup, setList, notes};

        onSubmit(newExercise);
        setSetList([]);
        setMuscleGroup("")
        setExerciseName("");
        setNotes("");
        setError("");
    }

    return (
        <Container fluid="md">
            <Row>
                <Form id="addExerciseForm" onSubmit={processExercise}>
                    <FloatingLabel controlId="floatingExerciseName" label="Name" className="mb-3">
                        <Form.Control
                            aria-label="name" 
                            type="text" 
                            value={name} 
                            onChange={e => setExerciseName(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingMuscleGroup" label="Muscle Group" className="mb-3">
                        <Form.Control
                            aria-label="muscleGroup"
                            type="text"
                            value={muscleGroup}
                            onChange={e => setMuscleGroup(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingExerciseNotes" label="Notes" className="mb-3">
                        <Form.Control
                            aria-label="exerciseNotes"
                            as="textarea"
                            value={notes}
                            rows={3}
                            onChange={e => setNotes(e.target.value)}
                        />
                    </FloatingLabel>
                </Form>
            </Row>
            <Row>
                <SetForm onSubmit={addSet}/>
                <SetList setList={setList} onDelete={deleteSet}/>
            </Row>
            <Row>
                <Button
                    aria-label="exerciseSubmit" 
                    className="mt-4" 
                    form="addExerciseForm" 
                    variant="outline-secondary" 
                    type="submit"
                >
                        Add Exercise
                </Button>
            </Row>

            { errMsg ? (
                <Container className="pt-4">
                    <Alert key='danger' variant='danger'>
                        Error: {errMsg}
                    </Alert>
                </Container>
            ): ( null )}
        </Container>
    )
}