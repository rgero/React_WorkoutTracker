import React from 'react';
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { WorkoutForm } from '../../components/workout/WorkoutForm';

export const EditWorkoutPage = ( )=> 
{
    const {state, fetchWorkouts, updateWorkout} = React.useContext(WorkoutContext);
    const [isLoaded, setLoaded] = React.useState(false);
    const [currentWorkout, setCurrentWorkout] = React.useState({});
    const [error, setError] = React.useState("");
    const { id } = useParams();

    React.useEffect(()=> {
        const GetWorkoutByID = async (id) => {
            if (!isLoaded)
            {
                await fetchWorkouts();
                setLoaded(true);
            }

            let loadedWorkout = state.filter( (targetWorkout) => {
                return id === targetWorkout._id;
            });
                
            if (loadedWorkout.length == 0)
            {
                setError("An error has occurred");
            } else {
                setError("");
                setCurrentWorkout(loadedWorkout[0]);
            }
        }
        GetWorkoutByID(id);
    }, [state]);

    const isValidWorkout = () => {
        return !Object.keys(currentWorkout).length == 0;
    }

    if (isLoaded) {
        if (isValidWorkout()) {
            return (
                <Container fluid="md">
                    <h1>Edit a workout</h1>
                    <WorkoutForm
                        workout={currentWorkout}
                        onSubmit={(workout)=> updateWorkout(workout)}
                    />
                </Container>
                )
        } else if (error)
        {
            return(
                <Container>
                    {error}
                </Container>
            )
        }
    } else {
        return (<div>Loading</div>)
    }
}