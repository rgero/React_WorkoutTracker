import React, {useContext, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import { WorkoutList } from '../../components/workout/WorkoutList';
import {Context as WorkoutContext} from '../../context/WorkoutContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BiRefresh } from "react-icons/bi";

export const ViewWorkoutsPage = ()=> 
{
    const {state, fetchWorkouts} = useContext(WorkoutContext);
    const [isLoaded, setLoaded] = useState(false);
    const [isDescending, setDescending] = useState(true);

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
                <Col>
                    <Form.Select
                        value={isDescending}
                        onChange={(e) => setDescending(e.currentTarget.value)}
                    >
                        <option value={true}>Descending</option>
                        <option value={false}>Ascending</option>
                    </Form.Select>
                </Col>
                <Col><Button className="float-end" variant="secondary" onClick={processWorkouts}><BiRefresh size={28}/></Button></Col>
            </Row>
            <Row>
                { isLoaded ? (
                    <>
                        <WorkoutList workoutList={state} descendingOrder={isDescending}/>
                    </>
                ) : (
                    <>Loading</>
                )}
            </Row>
        </Container>
    )
}