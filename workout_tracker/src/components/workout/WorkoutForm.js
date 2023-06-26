import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ExerciseList } from '../exercise/ExerciseList';
import { ExerciseForm } from '../exercise/ExerciseForm';

export const WorkoutForm = ({workout = {}, onSubmit})=> 
{
    const navigate = useNavigate();
    const [targetID] = useState(workout._id ? workout._id : null)
    const [workoutDate, setWorkoutDate] = useState(workout.workoutDate ? new moment(workout.workoutDate) : new moment().format('YYYY-MM-DD'));
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
                <Row className="justify-content-md-center">
                    <Col md="8" >
                        {/* Error Messaging */}
                        { error ? (
                            <Alert key='danger' variant='danger'>
                                <Alert.Heading>
                                    There's an error in your form
                                </Alert.Heading>
                                {error}
                            </Alert>
                        ): ( null )}

                        {/* Exercise Information */}
                        <Card>
                            <Card.Header>
                                <h4>Exercise Information</h4>
                            </Card.Header>
                            <Card.Body>
                                <Form id="addWorkout" onSubmit={submitWorkout}>
                                    <FloatingLabel controlId="floatingWorkoutDate" label="Workout Date" className="mb-3">
                                        <Form.Control
                                            aria-label="workoutDate" 
                                            type="date"
                                            value={workoutDate}
                                            onChange={e => setWorkoutDate(e.target.value)}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingNotes" label="Notes" className="mb-3">
                                        <Form.Control
                                            aria-label="workoutNotes"
                                            as="textarea"
                                            value={notes}
                                            rows={3}
                                            onChange={e => setNotes(e.target.value)}
                                        />
                                    </FloatingLabel>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>
                                <h4>Add/Edit Exercises</h4>
                            </Card.Header>
                            <Card.Body>
                                <ExerciseForm onSubmit={addExercise}/>
                            </Card.Body>
                        </Card>

                        {/* Exercise List */}
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
                        ): (null)}
                        
                        <Button form="addWorkout" aria-label="workoutSubmit" variant="outline-secondary" type="submit">
                                Submit Workout
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
}