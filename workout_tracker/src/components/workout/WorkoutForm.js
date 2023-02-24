import React, {useState, useEffect} from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import '../../styles/components/inputs.css'
import '../../styles/components/WorkoutForm.css';

import { ExerciseList } from '../exercise/ExerciseList';
import { ExerciseForm } from '../exercise/ExerciseForm';
import DateFormatter from '../../helpers/DateFormatter';

export const WorkoutForm = ({workout = {}, onSubmit})=> 
{
    const [workoutDate, setWorkoutDate] = useState(workout.workoutDate ? workout.workoutDate : DateFormatter(new Date()));
    const [exerciseList, setExerciseList] = useState(workout.exerciseList ? workout.exerciseList : []);
    const [notes, setNotes] = useState(workout.notes ? workout.notes : "");
    const [error, setError] = useState("");

    useEffect(()=> {
        var testSets = [
            { id: 1, reps: 10, weight: 200},
            { id: 2, reps: 10, weight: 180},
            { id: 3, reps: 10, weight: 160},
            { id: 4, reps: 10, weight: 140},
            { id: 5, reps: 10, weight: 120},
        ]

        var testExercises = [
            {
                name: "Tricep Ext",
                notes: "I got it",
                muscleGroup: "Triceps",
                setList: testSets
            },
            {
                name: "Bicep shocking",
                notes: "Electricity is fun",
                muscleGroup: "Biceps",
                setList: testSets
            }
        ]

        setExerciseList(testExercises);
        setNotes("Test Note");
    }, [])

    const addExercise = (exercise) => {
        setExerciseList([...exerciseList, exercise]);
    }
    
    const deleteExercise = (index) => {
        let newExerciseList = exerciseList;
        newExerciseList.splice(index, 1);
        setExerciseList( [...newExerciseList] );
    }

    const submitWorkout = (e) => {
        e.preventDefault();
        if (!workoutDate)
        {
            setError("Need a workout date");
        }
        if (exerciseList.length < 1)
        {
            setError("Need at least one exercise");
        }
        if (error)
        {
            return;
        }
        let workout = {
            workoutDate,
            exerciseList,
            notes
        }

        onSubmit(workout);
    }

    return (
        <Container fluid="md">
            <Form id="addWorkout" onSubmit={submitWorkout}>
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
            <Button form="addWorkout" variant="outline-secondary" type="submit">
                    Submit Workout
            </Button>
        </Container>

    )
}