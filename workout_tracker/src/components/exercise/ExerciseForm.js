import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

        const newExercise = {
            name,
            muscleGroup,
            setList,
            notes
        };

        onSubmit(newExercise);
        setSetList([]);
        setMuscleGroup("")
        setExerciseName("");
        setNotes("");
        setError("");
    }

    return (
        <Container fluid="md">
            <Form id="addExerciseForm" onSubmit={processExercise}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Name</InputGroup.Text>
                    <Form.Control
                        aria-label="name" 
                        type="text" 
                        value={name} 
                        onChange={e => setExerciseName(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Muscle Group</InputGroup.Text>
                    <Form.Control
                        aria-label="muscleGroup"
                        type="text"
                        value={muscleGroup}
                        onChange={e => setMuscleGroup(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Notes</InputGroup.Text>
                    <Form.Control
                        aria-label="exerciseNotes"
                        as="textarea"
                        value={notes}
                        rows={3}
                        onChange={e => setNotes(e.target.value)}
                    />
                </InputGroup>
            </Form>
            <SetForm onSubmit={addSet}/>
            <SetList setList={setList} onDelete={deleteSet}/>
            <Button
                aria-label="exerciseSubmit" 
                className="mt-4" 
                form="addExerciseForm" 
                variant="outline-secondary" 
                type="submit"
            >
                    Add Exercise
            </Button>

            {/* Error Processing? Don't know if this is completely necessary */}
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