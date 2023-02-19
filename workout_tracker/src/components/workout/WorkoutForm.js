import React, {useState, useEffect} from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

import '../../styles/components/inputs.css'
import '../../styles/components/WorkoutForm.css';

import { ExerciseList } from '../exercise/ExerciseList';
import { ExerciseForm } from '../exercise/ExerciseForm';

export const WorkoutForm = ({workout = {}, onSubmit})=> 
{
    const [workoutDate, setWorkoutDate] = useState(workout.workoutDate ? workout.workoutDate : new Date());
    const [exerciseList, setExerciseList] = useState(workout.exerciseList ? workout.exerciseList : []);
    const [notes, setNotes] = useState(workout.notes ? workout.notes : "");
    const [error, setError] = useState("");

    const addExercise = (exercise) => {
        console.log(exercise);
        setExerciseList([...exerciseList, exercise]);
    }
    
    const deleteExercise = (index) => {
        let newExerciseList = exerciseList;
        newExerciseList.splice(index, 1);
        setExerciseList( [...newExerciseList] );
    }

    return (
        <Container fluid="md">
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Date</InputGroup.Text>
                    <Form.Control type="date" value={workoutDate} onChange={e => setWorkoutDate(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Notes</InputGroup.Text>
                    <Form.Control as="textarea" value={notes} rows={3} onChange={e => setNotes(e.target.value)} />
                </InputGroup>
            </Form>
            <div className="exerciseForm">
                <ExerciseForm onSubmit={addExercise}/>
            </div>
            <div className="exerciseList">
                <ExerciseList exerciseList={exerciseList} onDelete={deleteExercise}/>
            </div>
        </Container>
    )
}