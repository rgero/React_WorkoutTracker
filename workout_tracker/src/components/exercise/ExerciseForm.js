import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

import { SetForm } from '../set/SetForm';
import { SetList } from '../set/SetList';

export const ExerciseForm = ({exercise = {}, onSubmit})=> 
{
    const [setList, setSetList] = useState(exercise.setList ? exercise.setList : []);
    const [muscleGroup, setMuscleGroup] = useState(exercise.muscleGroup ? exercise.muscleGroup : []);
    const [name, setExerciseName] = useState(exercise.name ? exercise.name : "");
    const [notes, setNotes] = useState(exercise.notes ? exercise.notes : "");

    // useEffect(()=> {
    //     var testSets = [
    //         { id: 1, reps: 10, weight: 200},
    //         { id: 2, reps: 10, weight: 180},
    //         { id: 3, reps: 10, weight: 160}
    //     ]
    //     var notes = "This is a long one"
    //     var muscleGroup = "Name is this"
    //     var name = "Chest Now"
    //     setSetList(testSets);
    //     setExerciseName(name);
    //     setNotes(notes);
    //     setMuscleGroup(muscleGroup)
    // }, [setSetList, setExerciseName, setNotes, setMuscleGroup])

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
        const newExercise = {
            name,
            muscleGroup,
            setList,
            notes
        };

        onSubmit(newExercise);
    }

    return (
        <Container fluid="md">
            <Form id="addExerciseForm" onSubmit={processExercise}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Name</InputGroup.Text>
                    <Form.Control type="text" value={name} onChange={e => setExerciseName(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Muscle Group</InputGroup.Text>
                    <Form.Control type="text" value={muscleGroup} onChange={e => setMuscleGroup(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Notes</InputGroup.Text>
                    <Form.Control as="textarea" value={notes} rows={3} onChange={e => setNotes(e.target.value)} />
                </InputGroup>
            </Form>
            <SetForm onSubmit={addSet}/>
            <SetList setList={setList} onDelete={deleteSet}/>
            <Button form="addExerciseForm" variant="outline-secondary" type="submit">
                    Add Exercise
            </Button>
        </Container>
    )
}