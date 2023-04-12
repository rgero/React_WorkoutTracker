import React, { useContext, useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import DateFormatter from '../../helpers/DateFormatter';
import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { ExerciseListItem } from '../../components/exercise/ExerciseListItem';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ViewWorkoutDetailsPage = ()=> 
{
    const navigate = useNavigate();
    const { id } = useParams();

    const {state, fetchWorkouts, deleteWorkout} = useContext(WorkoutContext);
    const [currentWorkout, setCurrentWorkout] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState("");


    const processDelete = async () => {
        confirmAlert({
            title: 'Confirm to delete?',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: async () => {
                    await deleteWorkout(currentWorkout._id);
                    navigate('/dashboard')
                }
              },
              {
                label: 'No'
              }
            ]
          });

    }

    const isValidWorkout = () => {
        return !Object.keys(currentWorkout).length == 0;
    }

    useEffect(()=> {
        const GetWorkoutByID = async (id) => {
            if (!isLoaded)
            {
                await fetchWorkouts();
                setLoaded(true);
            }
            let loadedWorkout = state.filter( (targetWorkout) => {
                return id === targetWorkout._id;
            });

            if (loadedWorkout.length == 0)
            {
                setError("An error has occurred");
            } else {
                setError("");
                setCurrentWorkout(loadedWorkout[0]);
            }
        }
        GetWorkoutByID(id);
    }, [fetchWorkouts, id, isLoaded, state]);

    if (isLoaded) {
        if (isValidWorkout()) { 
            return (
                <Container fluid="md">
                    <h1>{DateFormatter(currentWorkout.workoutDate)}</h1>
                    <Container>
                        <Row>
                            <Col sm={2}>
                                Notes
                            </Col>
                            <Col>
                                {currentWorkout.notes}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>Count</Col>
                            <Col>{currentWorkout.exerciseList.length}</Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                Exercises
                            </Col>
                            <Col>
                                <ListGroup>
                                        {
                                            currentWorkout.exerciseList.map((exercise, index) => (
                                                <ListGroup.Item>
                                                    <ExerciseListItem
                                                        exercise={exercise}
                                                    />
                                                </ListGroup.Item>
                                            ))
                                        }
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="justify-content-center" style={{display:'flex'}}>
                        <Row>
                            <Col><Button>Edit</Button></Col>
                            <Col><Button href="/dashboard">Dashboard</Button></Col>
                            <Col><Button variant="danger" onClick={processDelete}>Delete</Button></Col>
                        </Row>
                    </Container>
                </Container>
            )
        } else if (error)
        {
            return(
                <Container>
                    {error}
                </Container>
            )
        }
    } else {
        return (
            <Container>
                Loading
            </Container>
        )
    }
}

export default ViewWorkoutDetailsPage;