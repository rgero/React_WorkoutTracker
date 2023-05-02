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
    const {state, clearWorkouts, fetchWorkouts} = useContext(WorkoutContext);
    const [isLoaded, setLoaded] = useState(false);
    const [isDescending, setDescending] = useState(true);

    const processWorkouts = async () => {
        if (!isLoaded)
        {
            await fetchWorkouts();
            setLoaded(true);
        }
    }

    const reloadWorkouts = async () => {
        setLoaded(false);
        await clearWorkouts();
        await fetchWorkouts();
        setLoaded(true)
    }

    const processOrderChange = (e) => {
        if (e.currentTarget.value === "true")
        {
            setDescending(true);
        } else {
            setDescending(false);
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
                        onChange={processOrderChange}
                    >
                        <option value={true}>Descending</option>
                        <option value={false}>Ascending</option>
                    </Form.Select>
                </Col>
                <Col><Button className="float-end" variant="secondary" onClick={reloadWorkouts}><BiRefresh size={28}/></Button></Col>
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