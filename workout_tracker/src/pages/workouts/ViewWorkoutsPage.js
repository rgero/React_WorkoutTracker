import React, {useContext, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import { WorkoutList } from '../../components/workout/WorkoutList';
import {Context as WorkoutContext} from '../../context/WorkoutContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { BiRefresh } from "react-icons/bi";

export const ViewWorkoutsPage = ()=> 
{
    const {state, fetchWorkouts} = useContext(WorkoutContext);
    const [isLoaded, setLoaded] = useState(false);

    const processWorkouts = async () => {
        if (!isLoaded)
        {
            await fetchWorkouts();
            setLoaded(true);
        }
    }

    useEffect(()=> {
        processWorkouts();
    }, []);

    return (
        <Container className="pt-4">
            <Row className="pb-4 space-between">
                <Col><h2>Your Workouts</h2></Col>
                <Col><Button className="float-end" variant="secondary" onClick={processWorkouts}><BiRefresh size={28}/></Button></Col>
            </Row>
            <Row>
                { isLoaded ? (
                    <>
                        <WorkoutList workoutList={state} />
                    </>
                ) : (
                    <>Loading</>
                )}
            </Row>
        </Container>
    )
}