import React, { useContext, useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { WorkoutForm } from './WorkoutForm';

export const EditWorkoutPage = ( )=> 
{
    const {state, fetchWorkoutByID, updateWorkout} = useContext(WorkoutContext);
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
                <h1>Edit a workout</h1>
                <WorkoutForm
                    workout={state}
                    errorMessage={state.errorMessage}
                    onSubmit={(workout)=> updateWorkout(workout)}
                />
            </Container>
            )
    } else {
        return (<div>Loading</div>)
    }
}