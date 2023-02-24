import React, {useContext, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { WorkoutList } from './WorkoutList';
import {Context as WorkoutContext} from '../../context/WorkoutContext';

export const ViewWorkoutsPage = ()=> 
{
    const {state, fetchWorkouts} = useContext(WorkoutContext);

    useEffect(()=> {
        const processWorkouts = async () => {
            await fetchWorkouts();
        }
       processWorkouts();
    }, []);

    return (
        <Container>
            <div>Workouts</div>
            <WorkoutList workoutList={state} />
        </Container>
    )
}