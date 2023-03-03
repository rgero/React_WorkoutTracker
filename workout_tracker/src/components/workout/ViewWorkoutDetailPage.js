import React, { useContext, useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import {Context as WorkoutContext} from '../../context/WorkoutContext';

import DateFormatter from '../../helpers/DateFormatter';

const ViewWorkoutDetailsPage = ()=> 
{
    const {state, fetchWorkoutByID} = useContext(WorkoutContext);
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
                <h1>{DateFormatter(state.workoutDate)}</h1>
            </Container>
            )
    } else {
        return (<div>Loading</div>)
    }
}

export default ViewWorkoutDetailsPage;