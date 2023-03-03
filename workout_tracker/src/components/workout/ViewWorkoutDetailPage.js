import React, { useContext, useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import DateFormatter from '../../helpers/DateFormatter';
import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { ExerciseListItem } from '../exercise/ExerciseListItem';

const ViewWorkoutDetailsPage = ()=> 
{
    const {state, fetchWorkoutByID} = useContext(WorkoutContext);
    const [isLoaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(()=> {
        const GetWorkoutByID = async (id) => {
            await fetchWorkoutByID(id);
            setLoaded(true);
        }
        GetWorkoutByID(id);
    }, []);

    if (state.workoutDate)
    {
        return (
            <Container fluid="md">
                <h1>{DateFormatter(state.workoutDate)}</h1>
                <Container>
                    <Row>
                        <Col sm={2}>
                            Notes
                        </Col>
                        <Col>
                            {state.notes}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>Count</Col>
                        <Col>{state.exerciseList.length}</Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            Exercises
                        </Col>
                        <Col>
                            <ListGroup>
                                    {
                                        state.exerciseList.map((exercise, index) => (
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
            </Container>
            )
    } else {
        return (<div>Loading</div>)
    }
}

export default ViewWorkoutDetailsPage;