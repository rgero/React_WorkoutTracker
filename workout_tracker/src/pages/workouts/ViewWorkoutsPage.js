import React, {useContext, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import { WorkoutList } from '../../components/workout/WorkoutList';
import {Context as WorkoutContext} from '../../context/WorkoutContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const ViewWorkoutsPage = ()=> 
{
    const {state, fetchWorkouts} = useContext(WorkoutContext);
    const [loaded, setLoaded] = useState(false);

    const processWorkouts = async () => {
        setLoaded(false);
        await fetchWorkouts();
        setLoaded(true);
    }

    useEffect(()=> {
        processWorkouts();
    }, []);

    return (
        <Container>
            <Row className="space-between">
                <Col><h3>Your Workouts</h3></Col>
                <Col><Button onClick={processWorkouts}>Refresh</Button></Col>
            </Row>
            
            { loaded ? (
                <>
                    <WorkoutList workoutList={state} />
                </>
            ) : (
                <h3>Loading</h3>
            )}
        </Container>
    )
}