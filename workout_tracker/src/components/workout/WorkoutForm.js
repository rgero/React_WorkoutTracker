import React, {useState} from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { ExerciseList } from '../exercise/ExerciseList';
import { ExerciseForm } from '../exercise/ExerciseForm';
import DateFormatter from '../../helpers/DateFormatter';
import {ErrorModal} from '../ErrorModal';

export const WorkoutForm = ({workout = {}, onSubmit})=> 
{
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

    const closeModalFunction = () => {
        setError("");
    }

    const submitWorkout = (e) => {
        e.preventDefault();
        if (!workoutDate)
        {
            setError("Need a workout date");
        }
        if (exerciseList.length < 1)
        {
            setError("You need at least one exercise");
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

        setWorkoutDate(new Date());
        setExerciseList([]);
        setNotes("");
    }
    
    return (
            <Container fluid="md">
                <ErrorModal closeFunction={closeModalFunction} errorMessage={error} shouldBeOpen={error ? true : false}/>
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