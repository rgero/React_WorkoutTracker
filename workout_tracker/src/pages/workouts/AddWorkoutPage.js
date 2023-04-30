import React from 'react';
import Container from 'react-bootstrap/Container';

import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { WorkoutForm } from '../../components/workout/WorkoutForm';

export const AddWorkoutPage = ()=> 
{
    const {state, createWorkout} = React.useContext(WorkoutContext);
    return (
        <Container fluid="md">
            <h1>Create a new workout</h1>
            <WorkoutForm
                onSubmit={(workout)=> createWorkout(workout)}
            />
        </Container>
    )
}