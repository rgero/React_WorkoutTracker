import React from 'react';
import Card from 'react-bootstrap/Card';

import DateFormatter from '../../helpers/DateFormatter';

export const WorkoutListItem = ({workout}) => {
    let {workoutDate, notes, exerciseList} = workout;

    workoutDate = new Date(workoutDate);
    console.log(workoutDate);

    return (
        <div>
            <Card bordered>
                <Card.Body>
                    <Card.Title>{DateFormatter(workoutDate)}</Card.Title>
                    <Card.Text>{notes}</Card.Text>
                    <Card.Text>Total Exercises: {exerciseList.length}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}