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
        <Container className="pt-4">
            <Row className="pb-4 space-between">
                <Col><h3>Your Workouts</h3></Col>
                <Col><Button className="float-sm-end" variant="secondary" onClick={processWorkouts}>Refresh</Button></Col>
            </Row>
            
            { loaded ? (
                <>
                    <WorkoutList workoutList={state} />
                </>
            ) : (
                <>Loading</>
            )}
        </Container>
    )
}