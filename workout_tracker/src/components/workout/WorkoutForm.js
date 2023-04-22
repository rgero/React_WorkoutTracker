import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import { ExerciseList } from '../exercise/ExerciseList';
import { ExerciseForm } from '../exercise/ExerciseForm';
import DateFormatter from '../../helpers/DateFormatter';


export const WorkoutForm = ({workout = {}, onSubmit})=> 
{
    const navigate = useNavigate();
    const [targetID, setWorkoutID] = useState(workout._id ? workout._id : null)
    const [workoutDate, setWorkoutDate] = useState(workout.workoutDate ? DateFormatter(workout.workoutDate) : DateFormatter(new Date()));
    const [exerciseList, setExerciseList] = useState(workout.exerciseList ? workout.exerciseList : []);
    const [notes, setNotes] = useState(workout.notes ? workout.notes : "");
    const [error, setError] = useState("");

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
            setError("You need a valid workout date");
            return;
        }
        if (exerciseList.length < 1)
        {
            setError("You need at least one exercise for workout submission.");
            return;
        }

        let workout = {
            _id: targetID,
            workoutDate,
            exerciseList,
            notes
        }

        onSubmit(workout);
        navigate('/dashboard')
    }

    return (
            <Container fluid="md">
                { error ? (
                    <Alert key='danger' variant='danger'>
                        <Alert.Heading>
                            There's an error in your form
                        </Alert.Heading>
                        {error}
                    </Alert>
                ): ( null )}
                <Accordion defaultActiveKey="0">
                    <Accordion.Item>
                        <Accordion.Header>
                            Exercise Information
                        </Accordion.Header>
                        <Accordion.Body>
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
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item>
                        <Accordion.Header>
                            Add/Edit Exercises
                        </Accordion.Header>
                        <Accordion.Body>
                            <ExerciseForm onSubmit={addExercise}/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                { exerciseList.length > 0 ? (
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item>
                            <Accordion.Header>
                                Exercise List
                            </Accordion.Header>
                            <Accordion.Body>
                                    <ExerciseList exerciseList={exerciseList} onDelete={deleteExercise}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ): (null)
                }
                <Button form="addWorkout" variant="outline-secondary" type="submit">
                        Submit Workout
                </Button>
            </Container>
        )
}