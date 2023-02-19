import React, { useContext, } from 'react';
import Container from 'react-bootstrap/Container';

import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { WorkoutForm } from './WorkoutForm';

export const AddWorkoutPage = ()=> 
{
    const {state, createWorkout} = useContext(WorkoutContext);
    return (
        <Container fluid="md">
            <h1>Create a new workout</h1>
            <WorkoutForm
                errorMessage={state.errorMessage}
                onSubmit={({workout})=> createWorkout({workout})}
            />
        </Container>
    )
}